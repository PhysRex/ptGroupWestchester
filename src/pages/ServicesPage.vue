<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useSiteContent, useServicesContent } from '../composables/useContent'
import { useScrollReveal } from '../composables/useScrollReveal'
import HeroSection from '../components/ui/HeroSection.vue'
import GoldRule from '../components/ui/GoldRule.vue'

const site = useSiteContent()
const services = useServicesContent()

useHead({
  title: 'Our Services — PTG of Westchester',
  meta: [
    { name: 'description', content: services.intro },
    { property: 'og:title', content: 'Our Services — Physical Therapy Group of Westchester' },
  ],
})

useScrollReveal()

const searchQuery = ref('')

const filteredServices = computed(() => {
  if (!searchQuery.value.trim()) return services.items
  const q = searchQuery.value.toLowerCase()
  return services.items.filter(
    (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
  )
})
</script>

<template>
  <div>
  <HeroSection title="Our Services" :description="services.intro" />

  <!-- ════ SEARCH ════ -->
  <section class="bg-sand py-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="max-w-md mx-auto relative">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search conditions..."
          class="w-full pl-12 pr-4 py-3 bg-ivory border border-navy/10 rounded-sm text-charcoal placeholder-slate/50 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>
    </div>
  </section>

  <!-- ════ SERVICES GRID ════ -->
  <section class="bg-ivory py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div v-if="filteredServices.length === 0" class="text-center py-12">
        <p class="text-slate text-lg">No services found matching "{{ searchQuery }}"</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(service, index) in filteredServices"
          :key="service.name"
          class="reveal card-hover bg-white border-l-2 border-gold/40 p-6 lg:p-8 rounded-sm shadow-sm"
          :class="index % 4 < 2 ? 'reveal-delay-1' : 'reveal-delay-2'"
        >
          <h3 class="font-display text-navy text-lg lg:text-xl font-semibold mb-3">{{ service.name }}</h3>
          <p class="text-charcoal/70 text-sm leading-relaxed">{{ service.description }}</p>
        </article>
      </div>

      <div class="mt-16 text-center">
        <GoldRule :wide="true" />
        <p class="mt-6 text-slate text-sm">
          Don't see your condition? Contact us — we treat many more conditions than listed here.
        </p>
      </div>
    </div>
  </section>

  <!-- ════ BOTTOM CTA ════ -->
  <section class="bg-navy py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="reveal font-display text-ivory text-3xl lg:text-4xl font-bold">
        Start Your Treatment Today
      </h2>
      <p class="reveal reveal-delay-1 text-ivory/60 mt-4 text-lg">
        Our team is ready to create a personalized treatment plan for your recovery.
      </p>
      <a
        :href="site.appointmentUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="reveal reveal-delay-2 cta-glow inline-flex items-center gap-3 mt-8 px-10 py-4 bg-gold text-navy text-sm uppercase tracking-[0.2em] hover:bg-gold-light transition-all duration-300 rounded-sm font-bold"
      >
        Request Appointment
      </a>
    </div>
  </section>
  </div>
</template>
