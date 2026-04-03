<script setup lang="ts">
import { useAdminStore } from '../../stores/admin'

const admin = useAdminStore()
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
      class="fixed top-12 right-4 z-[55] w-72 bg-white border border-navy/10 rounded-sm shadow-xl p-5 max-h-[80vh] overflow-y-auto"
    >
      <h3 class="font-display text-navy text-lg font-bold mb-3">Admin Guide</h3>
      <div class="space-y-3 text-sm text-charcoal/70 leading-relaxed">
        <p>
          <strong class="text-charcoal">Click any text</strong> on the page to edit it inline.
        </p>
        <p>
          Press <kbd class="px-1.5 py-0.5 bg-sand rounded text-xs font-mono">Esc</kbd> to cancel an edit.
        </p>
        <p>
          When you're done, click <strong class="text-gold">Export JSON</strong> to download updated content files.
        </p>
        <p>
          Commit the downloaded JSON files to the <code class="text-xs bg-sand px-1 rounded">src/content/</code> directory to apply changes.
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
            — {{ Object.keys(changes).length }} change{{ Object.keys(changes).length > 1 ? 's' : '' }}
          </li>
        </ul>
      </div>
    </aside>
  </Transition>
</template>
