import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAdminStore = defineStore('admin', () => {
  const isActive = ref(false)
  const edits = ref<Record<string, Record<string, string>>>({})

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
    if (!edits.value[file]) {
      edits.value[file] = {}
    }
    edits.value[file][path] = value
  }

  function discardAll() {
    edits.value = {}
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
    const modules = import.meta.glob('../content/*.json', { eager: true }) as Record<string, Record<string, unknown>>

    Object.entries(modules).forEach(([path, mod]) => {
      const filename = path.split('/').pop()?.replace('.json', '') || 'unknown'
      const content = JSON.parse(JSON.stringify(mod.default || mod))

      // Apply edits
      if (edits.value[filename]) {
        Object.entries(edits.value[filename]).forEach(([jsonPath, value]) => {
          setNestedValue(content, jsonPath, value)
        })
      }

      const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${filename}.json`
      a.click()
      URL.revokeObjectURL(url)
    })
  }

  return { isActive, edits, isDirty, activate, deactivate, toggle, setEdit, discardAll, exportEdits, exportFullContent }
})

function setNestedValue(obj: Record<string, unknown>, path: string, value: unknown) {
  const keys = path.split('.')
  let current: Record<string, unknown> = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {}
    }
    current = current[key] as Record<string, unknown>
  }
  current[keys[keys.length - 1]] = value
}
