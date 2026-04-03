<script setup lang="ts">
import { useAdminStore } from '../../stores/admin'

const admin = useAdminStore()

function handleExport() {
  admin.exportFullContent()
}

function handleDiscard() {
  if (confirm('Discard all unsaved edits?')) {
    admin.discardAll()
  }
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
  >
    <div v-if="admin.isActive" class="fixed top-0 left-0 right-0 z-[60] bg-charcoal text-ivory shadow-lg">
      <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span class="text-sm font-semibold tracking-wide">ADMIN MODE</span>
          <span v-if="admin.isDirty" class="text-xs text-gold bg-gold/10 px-2 py-0.5 rounded-full">
            Unsaved changes
          </span>
        </div>

        <div class="flex items-center gap-3">
          <button
            v-if="admin.isDirty"
            @click="handleDiscard"
            class="text-xs uppercase tracking-widest text-ivory/60 hover:text-ivory transition-colors px-3 py-1.5"
          >
            Discard
          </button>
          <button
            @click="handleExport"
            :disabled="!admin.isDirty"
            :class="[
              'text-xs uppercase tracking-widest px-4 py-1.5 rounded-sm transition-all',
              admin.isDirty
                ? 'bg-gold text-navy hover:bg-gold-light font-semibold'
                : 'bg-ivory/10 text-ivory/30 cursor-not-allowed'
            ]"
          >
            Export JSON
          </button>
          <button
            @click="admin.deactivate()"
            class="text-xs uppercase tracking-widest text-ivory/60 hover:text-ivory transition-colors px-3 py-1.5 border border-ivory/20 rounded-sm"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
