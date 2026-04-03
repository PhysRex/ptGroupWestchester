<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useSiteContent } from '../../composables/useContent'
import BrandMark from '../ui/BrandMark.vue'

const site = useSiteContent()
const route = useRoute()
const mobileOpen = ref(false)
const scrolledPastHero = ref(false)

const isHomePage = computed(() => route.path === '/')
const showNavBrand = computed(() => !isHomePage.value || scrolledPastHero.value)

function handleScroll() {
  scrolledPastHero.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const links = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Our Team' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Stories' },
  { to: '/forms', label: 'Resources' },
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-ivory/5">
    <nav class="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-18">
      <!-- Logo — hidden on home until scroll -->
      <RouterLink
        to="/"
        class="shrink-0 transition-all duration-500 ease-out"
        :class="showNavBrand ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'"
        @click="mobileOpen = false"
      >
        <BrandMark />
      </RouterLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-7">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link text-ivory/70 hover:text-ivory text-[0.8rem] font-body tracking-[0.12em] uppercase transition-colors"
        >
          {{ link.label }}
        </RouterLink>
        <a
          :href="site.appointmentUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-glow ml-1 px-5 py-2 border border-gold text-gold text-[0.75rem] uppercase tracking-[0.15em] hover:bg-gold hover:text-navy transition-all duration-300 rounded-sm font-semibold"
        >
          Book Now
        </a>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden text-ivory p-2"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle navigation menu"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-navy border-t border-ivory/10 px-6 pb-6 pt-4">
        <div class="flex flex-col gap-4">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-ivory/80 hover:text-ivory text-base font-body tracking-wide uppercase transition-colors"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <a
            :href="site.appointmentUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 inline-block text-center px-5 py-3 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300"
            @click="mobileOpen = false"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer for fixed nav -->
  <div class="h-16 lg:h-18"></div>
</template>
