<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useSiteContent, useTestimonialsContent } from '../composables/useContent'
import { useScrollReveal } from '../composables/useScrollReveal'
import HeroSection from '../components/ui/HeroSection.vue'

const site = useSiteContent()
const testimonials = useTestimonialsContent()

useHead({
  title: 'Patient Stories — PTG of Westchester',
  meta: [
    { name: 'description', content: testimonials.intro },
    { property: 'og:title', content: 'Patient Stories — Physical Therapy Group of Westchester' },
  ],
})

useScrollReveal()

// Assign "size" classes for masonry-like visual variety
function cardSize(message: string): string {
  if (message.length > 200) return 'md:col-span-2'
  return ''
}
</script>

<template>
  <div>
  <HeroSection title="Patient Stories" :description="testimonials.intro" />

  <!-- ════ TESTIMONIALS GRID ════ -->
  <section class="bg-ivory py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(testimonial, index) in testimonials.items"
          :key="index"
          :class="[
            'reveal card-hover bg-white p-8 rounded-sm shadow-sm relative',
            cardSize(testimonial.message),
            `reveal-delay-${(index % 3) + 1}`,
          ]"
        >
          <!-- Gold quote mark -->
          <span class="font-accent text-gold/20 text-5xl leading-none select-none absolute top-4 left-6">&ldquo;</span>

          <blockquote class="font-accent italic text-charcoal text-base lg:text-lg leading-relaxed mt-6">
            {{ testimonial.message }}
          </blockquote>

          <div class="mt-6 flex items-center gap-3">
            <div class="w-8 h-px bg-gold"></div>
            <cite class="not-italic text-gold text-sm uppercase tracking-[0.15em] font-body font-semibold">
              {{ testimonial.author }}
            </cite>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ════ BOTTOM CTA ════ -->
  <section class="bg-navy py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="reveal font-display text-ivory text-3xl lg:text-4xl font-bold">
        Your Recovery Story Starts Here
      </h2>
      <p class="reveal reveal-delay-1 text-ivory/60 mt-4 text-lg">
        Join the many patients who have found relief and regained their quality of life.
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
