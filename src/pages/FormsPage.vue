<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useSiteContent, useFormsContent } from '../composables/useContent'
import { useScrollReveal } from '../composables/useScrollReveal'
import HeroSection from '../components/ui/HeroSection.vue'

const site = useSiteContent()
const forms = useFormsContent()

useHead({
  title: 'Patient Resources — PTG of Westchester',
  meta: [
    { name: 'description', content: forms.intro },
    { property: 'og:title', content: 'Patient Resources — Physical Therapy Group of Westchester' },
  ],
})

useScrollReveal()
</script>

<template>
  <div>
  <HeroSection title="Patient Resources" :description="forms.intro" />

  <!-- ════ FORMS GRID ════ -->
  <section class="bg-ivory py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(form, index) in forms.items"
          :key="form.name"
          :class="[
            'reveal card-hover bg-white p-6 lg:p-8 rounded-sm shadow-sm flex flex-col',
            `reveal-delay-${(index % 2) + 1}`,
          ]"
        >
          <div class="flex items-start gap-4 flex-1">
            <!-- PDF Icon -->
            <div class="shrink-0 w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center">
              <svg class="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <div class="flex-1">
              <h3 class="font-display text-navy text-lg font-semibold mb-2">{{ form.name }}</h3>
              <p class="text-charcoal/70 text-sm leading-relaxed">{{ form.description }}</p>
            </div>
          </div>

          <a
            :href="`/forms/${form.file}`"
            :download="form.file"
            class="mt-6 inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-widest hover:text-gold-light transition-colors group"
          >
            <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </article>
      </div>
    </div>
  </section>

  <!-- ════ CONTACT STRIP ════ -->
  <section class="bg-sand py-12">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <p class="text-charcoal/70 text-base">
        Questions about which forms to complete? Call us at
        <a :href="`tel:${site.phone.replace(/\./g, '')}`" class="text-gold font-semibold hover:text-gold-light transition-colors">{{ site.phone }}</a>
        or email
        <a :href="`mailto:${site.email}`" class="text-gold font-semibold hover:text-gold-light transition-colors">{{ site.email }}</a>
      </p>
    </div>
  </section>

  <!-- ════ BOTTOM CTA ════ -->
  <section class="bg-navy py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="reveal font-display text-ivory text-3xl lg:text-4xl font-bold">
        Ready for Your First Visit?
      </h2>
      <p class="reveal reveal-delay-1 text-ivory/60 mt-4 text-lg">
        Complete your forms ahead of time for a smooth first appointment.
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
