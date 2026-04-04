<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAdminStore } from '../../stores/admin'
import type { ContentFile } from '../../stores/admin'

const admin = useAdminStore()
const selectedFile = ref<ContentFile>('home')
const filter = ref('')
const files: ContentFile[] = ['site', 'home', 'team', 'services', 'forms', 'testimonials']

const editableEntries = computed(() => {
  const search = filter.value.trim().toLowerCase()
  const entries = admin.getEditableTextEntries(selectedFile.value)
  if (!search) return entries

  return entries.filter((entry) => {
    return entry.path.toLowerCase().includes(search) || entry.value.toLowerCase().includes(search)
  })
})

function updateValue(path: string, event: Event) {
  const target = event.target as HTMLTextAreaElement
  admin.setEdit(selectedFile.value, path, target.value)
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 translate-x-full"
  >
    <aside
      v-if="admin.isActive"
      class="fixed top-12 right-4 z-[55] w-[min(92vw,32rem)] bg-white border border-navy/10 rounded-sm shadow-xl p-5 max-h-[80vh] overflow-y-auto"
    >
      <h3 class="font-display text-navy text-lg font-bold mb-3">Live Copy Editor</h3>
      <div class="space-y-3 text-sm text-charcoal/70 leading-relaxed">
        <p>
          Edit copy fields below and updates will render on-page immediately.
        </p>
        <p>
          Draft edits are saved to this browser until you discard them.
        </p>
        <p>
          Click <strong class="text-gold">Export JSON</strong> when finished and commit those files.
        </p>
      </div>

      <div class="mt-4 pt-4 border-t border-navy/10 space-y-3">
        <label class="block">
          <span class="text-xs font-semibold uppercase tracking-wider text-charcoal/70">Content File</span>
          <select
            v-model="selectedFile"
            class="mt-1 w-full border border-navy/15 rounded-sm px-2.5 py-2 text-sm bg-white text-charcoal"
          >
            <option v-for="file in files" :key="file" :value="file">{{ file }}.json</option>
          </select>
        </label>

        <label class="block">
          <span class="text-xs font-semibold uppercase tracking-wider text-charcoal/70">Filter Fields</span>
          <input
            v-model="filter"
            type="text"
            placeholder="Search by path or value"
            class="mt-1 w-full border border-navy/15 rounded-sm px-2.5 py-2 text-sm"
          />
        </label>
      </div>

      <div class="mt-4 space-y-3">
        <div
          v-for="entry in editableEntries"
          :key="entry.path"
          class="border border-navy/10 rounded-sm p-2.5"
        >
          <p class="text-[11px] font-mono text-navy/80 mb-1.5 break-all">{{ entry.path }}</p>
          <textarea
            :value="entry.value"
            rows="2"
            class="w-full border border-navy/10 rounded-sm px-2 py-1.5 text-sm leading-relaxed resize-y min-h-[3rem]"
            @input="updateValue(entry.path, $event)"
          />
        </div>

        <p v-if="editableEntries.length === 0" class="text-xs text-charcoal/60">
          No editable text fields found for this filter.
        </p>
      </div>

      <div v-if="admin.isDirty" class="mt-5 pt-4 border-t border-navy/10">
        <p class="text-xs text-gold font-semibold uppercase tracking-widest mb-2">Pending Edits</p>
        <ul class="space-y-1">
          <li
            v-for="(changes, file) in admin.edits"
            :key="file"
            class="text-xs text-charcoal/60"
          >
            <span class="font-mono text-navy">{{ file }}.json</span>
            - {{ Object.keys(changes).length }} change{{ Object.keys(changes).length > 1 ? 's' : '' }}
          </li>
        </ul>
      </div>
    </aside>
  </Transition>
</template>
