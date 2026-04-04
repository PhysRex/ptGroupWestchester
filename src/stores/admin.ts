import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import siteData from '../content/site.json'
import homeData from '../content/home.json'
import teamData from '../content/team.json'
import servicesData from '../content/services.json'
import formsData from '../content/forms.json'
import testimonialsData from '../content/testimonials.json'

export type ContentFile = 'site' | 'home' | 'team' | 'services' | 'forms' | 'testimonials'

type EditsMap = Record<string, Record<string, string>>
type JsonRecord = Record<string, unknown>

const DRAFT_STORAGE_KEY = 'ptg-westchester-admin-draft-v1'
const CONTENT_FILES: ContentFile[] = ['site', 'home', 'team', 'services', 'forms', 'testimonials']

const baseContent: Record<ContentFile, JsonRecord> = {
  site: deepClone(siteData) as JsonRecord,
  home: deepClone(homeData) as JsonRecord,
  team: deepClone(teamData) as JsonRecord,
  services: deepClone(servicesData) as JsonRecord,
  forms: deepClone(formsData) as JsonRecord,
  testimonials: deepClone(testimonialsData) as JsonRecord,
}

export const useAdminStore = defineStore('admin', () => {
  const isActive = ref(false)
  const edits = ref<EditsMap>({})
  const content = ref<Record<ContentFile, JsonRecord>>(deepClone(baseContent) as Record<ContentFile, JsonRecord>)

  const isDirty = computed(() => Object.keys(edits.value).length > 0)

  function activate() {
    isActive.value = true
  }

  function deactivate() {
    isActive.value = false
  }

  function toggle() {
    isActive.value = !isActive.value
  }

  function setEdit(file: string, path: string, value: string) {
    if (!isContentFile(file)) return

    if (!edits.value[file]) {
      edits.value[file] = {}
    }
    edits.value[file][path] = value

    setNestedValue(content.value[file], path, value)
    persistDraftEdits(edits.value)
  }

  function getContent(file: ContentFile): JsonRecord {
    return content.value[file]
  }

  function getEditableTextEntries(file: ContentFile): Array<{ path: string; value: string }> {
    const entries = flattenStringFields(content.value[file])
    return entries.sort((a, b) => a.path.localeCompare(b.path))
  }

  function discardAll() {
    edits.value = {}
    content.value = deepClone(baseContent) as Record<ContentFile, JsonRecord>
    clearDraftEdits()
  }

  function exportEdits() {
    const files = Object.entries(edits.value)
    if (files.length === 0) return

    files.forEach(([filename, changes]) => {
      const blob = new Blob([JSON.stringify(changes, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${filename}-edits.json`
      a.click()
      URL.revokeObjectURL(url)
    })
  }

  function exportFullContent() {
    CONTENT_FILES.forEach((file) => {
      const blob = new Blob([JSON.stringify(content.value[file], null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${file}.json`
      a.click()
      URL.revokeObjectURL(url)
    })
  }

  loadPersistedEdits(edits, content)

  return {
    isActive,
    edits,
    isDirty,
    activate,
    deactivate,
    toggle,
    setEdit,
    getContent,
    getEditableTextEntries,
    discardAll,
    exportEdits,
    exportFullContent,
  }
})

function setNestedValue(target: unknown, path: string, value: string) {
  const keys = path.split('.')
  if (keys.length === 0) return

  let current: unknown = target

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    const nextKey = keys[i + 1]

    if (Array.isArray(current)) {
      const index = Number(key)
      if (Number.isNaN(index)) return
      if (current[index] === undefined || current[index] === null) {
        current[index] = isArrayIndex(nextKey) ? [] : {}
      }
      current = current[index]
      continue
    }

    if (isRecord(current)) {
      if (current[key] === undefined || current[key] === null) {
        current[key] = isArrayIndex(nextKey) ? [] : {}
      }
      current = current[key]
      continue
    }

    return
  }

  const lastKey = keys[keys.length - 1]
  if (Array.isArray(current)) {
    const index = Number(lastKey)
    if (Number.isNaN(index)) return
    current[index] = value
    return
  }

  if (isRecord(current)) {
    current[lastKey] = value
  }
}

function flattenStringFields(value: unknown, path = ''): Array<{ path: string; value: string }> {
  if (typeof value === 'string') {
    return path ? [{ path, value }] : []
  }

  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flattenStringFields(item, path ? `${path}.${index}` : String(index)))
  }

  if (isRecord(value)) {
    return Object.entries(value).flatMap(([key, nested]) =>
      flattenStringFields(nested, path ? `${path}.${key}` : key),
    )
  }

  return []
}

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

function persistDraftEdits(edits: EditsMap) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(edits))
}

function clearDraftEdits() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(DRAFT_STORAGE_KEY)
}

function loadPersistedEdits(
  edits: { value: EditsMap },
  content: { value: Record<ContentFile, JsonRecord> },
) {
  if (typeof window === 'undefined') return

  const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY)
  if (!raw) return

  try {
    const parsed = JSON.parse(raw) as EditsMap
    if (!isRecord(parsed)) return

    edits.value = parsed
    Object.entries(parsed).forEach(([file, fileEdits]) => {
      if (!isContentFile(file) || !isRecord(fileEdits)) return

      Object.entries(fileEdits).forEach(([path, value]) => {
        if (typeof value !== 'string') return
        setNestedValue(content.value[file], path, value)
      })
    })
  } catch {
    clearDraftEdits()
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function isArrayIndex(value: string) {
  return /^\d+$/.test(value)
}

function isContentFile(value: string): value is ContentFile {
  return CONTENT_FILES.includes(value as ContentFile)
}
