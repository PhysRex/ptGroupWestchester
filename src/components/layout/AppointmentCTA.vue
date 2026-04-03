<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useSiteContent } from '../../composables/useContent'

const site = useSiteContent()
const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <a
      v-if="visible"
      :href="site.appointmentUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-40 cta-glow bg-gold text-navy px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-widest shadow-lg hover:bg-gold-light transition-all duration-300 flex items-center gap-2"
    >
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Book Now
    </a>
  </Transition>
</template>
