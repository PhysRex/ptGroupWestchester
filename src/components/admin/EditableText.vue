<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAdminStore } from '../../stores/admin'

const props = defineProps<{
  value: string
  file: string
  path: string
  tag?: string
}>()

const emit = defineEmits<{
  update: [value: string]
}>()

const admin = useAdminStore()
const el = ref<HTMLElement | null>(null)
const editing = ref(false)

function startEdit() {
  if (!admin.isActive) return
  editing.value = true
}

function finishEdit() {
  if (!el.value) return
  const newValue = el.value.innerText.trim()
  if (newValue !== props.value) {
    admin.setEdit(props.file, props.path, newValue)
    emit('update', newValue)
  }
  editing.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (el.value) el.value.innerText = props.value
    editing.value = false
  }
}

watch(() => admin.isActive, (active) => {
  if (!active) editing.value = false
})
</script>

<template>
  <component
    :is="tag || 'span'"
    ref="el"
    :contenteditable="admin.isActive"
    :class="{ 'editable-active': admin.isActive && editing, 'cursor-pointer': admin.isActive }"
    @focus="startEdit"
    @blur="finishEdit"
    @keydown="handleKeydown"
    :title="admin.isActive ? 'Click to edit' : undefined"
  >{{ value }}</component>
</template>
