<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'
import { useSiteContent, useHomeContent, useTestimonialsContent } from '../composables/useContent'
import { useScrollReveal } from '../composables/useScrollReveal'
import GoldRule from '../components/ui/GoldRule.vue'

const site = useSiteContent()
const home = useHomeContent()
const testimonials = useTestimonialsContent()

useHead({
  title: 'Physical Therapy Group of Westchester',
  meta: [
    { name: 'description', content: home.philosophy },
    { property: 'og:title', content: site.name },
    { property: 'og:description', content: home.philosophy },
  ],
})

useScrollReveal()

// Testimonial carousel
const featured = testimonials.items.filter(t => t.message.length > 80).slice(0, 5)
const currentTestimonial = ref(0)
let testimonialTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  testimonialTimer = setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % featured.length
  }, 6000)
})

onUnmounted(() => {
  if (testimonialTimer) clearInterval(testimonialTimer)
})

// Image imports
import practiceOutside from '../assets/images/practice-outside-edited__compressed.png'
import gymOffice from '../assets/images/office/gym-office__compressed.jpg'
import backMassage from '../assets/images/back-massage__compressed.jpg'
import logoIcon from '../assets/images/logo/logo-icon.png'

const featureImages: Record<string, string> = {
  'practice-outside-edited__compressed.png': practiceOutside,
  'gym-office__compressed.jpg': gymOffice,
  'back-massage__compressed.jpg': backMassage,
}
</script>

<template>
  <div>
  <!-- ════ HERO ════ -->
  <section class="relative min-h-[100vh] flex items-end overflow-hidden bg-navy">
    <!-- Layered background: radial gradient + office image with heavy overlay -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_#1B2D45_0%,_#0D1B2A_60%)]"></div>
    <img
      :src="featureImages['gym-office__compressed.jpg']"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity"
    />

    <!-- Decorative vertical rules -->
    <div class="absolute top-0 left-[8%] w-px h-full bg-gradient-to-b from-transparent via-gold/8 to-transparent hidden lg:block"></div>
    <div class="absolute top-0 left-[92%] w-px h-full bg-gradient-to-b from-transparent via-gold/8 to-transparent hidden lg:block"></div>

    <!-- Giant ghost typography — decorative background text -->
    <div class="absolute top-[15%] -right-[5%] font-display text-[12rem] lg:text-[20rem] font-bold text-ivory/[0.015] leading-none select-none pointer-events-none tracking-tight hidden md:block">
      PT
    </div>

    <!-- Main content — asymmetric, pushed to bottom-left -->
    <div class="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-32 lg:pt-40">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20">

        <!-- Left: Brand + headline -->
        <div class="lg:max-w-2xl">
          <!-- Logo icon — the singular hero instance -->
          <div class="reveal mb-8">
            <img :src="logoIcon" alt="Physical Therapy Group of Westchester" class="h-16 w-16 lg:h-20 lg:w-20 drop-shadow-[0_0_30px_rgba(184,134,11,0.15)]" />
          </div>

          <!-- Location tag -->
          <p class="reveal reveal-delay-1 text-gold/80 text-[0.7rem] uppercase tracking-[0.35em] font-body font-medium mb-5">
            Rye Brook, New York
          </p>

          <!-- Headline — dramatic sizing, tight leading -->
          <h1 class="reveal reveal-delay-1 font-display text-ivory font-bold leading-[0.95] tracking-[-0.02em]">
            <span class="block text-5xl md:text-7xl lg:text-[5.5rem]">Physical</span>
            <span class="block text-5xl md:text-7xl lg:text-[5.5rem]">Therapy</span>
            <span class="block text-5xl md:text-7xl lg:text-[5.5rem] -mt-1">Group</span>
          </h1>

          <!-- Italic subline — offset right for asymmetry -->
          <p class="reveal reveal-delay-2 font-accent italic text-gold text-2xl md:text-3xl lg:text-[2.2rem] mt-4 lg:ml-2">
            of Westchester
          </p>

          <!-- Gold rule — left-aligned, not centered -->
          <div class="reveal reveal-delay-2 w-16 h-[1px] bg-gold mt-8"></div>
        </div>

        <!-- Right: Tagline + CTA — vertically aligned to bottom -->
        <div class="lg:max-w-sm lg:pb-2">
          <p class="reveal reveal-delay-3 text-ivory/50 text-base lg:text-lg leading-relaxed font-body">
            {{ home.hero.tagline }}
          </p>

          <a
            :href="site.appointmentUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="reveal reveal-delay-4 cta-glow inline-flex items-center gap-3 mt-8 px-7 py-3.5 border border-gold text-gold text-[0.75rem] uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-all duration-300 rounded-sm font-semibold"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Request Appointment
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom edge: subtle gold gradient line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
  </section>

  <!-- ════ PHILOSOPHY ════ -->
  <section class="bg-ivory py-20 lg:py-28">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <div class="reveal">
        <span class="font-accent text-gold text-6xl lg:text-8xl leading-none select-none">&ldquo;</span>
      </div>
      <blockquote class="reveal reveal-delay-1 font-accent italic text-charcoal text-xl md:text-2xl lg:text-3xl leading-relaxed -mt-8 lg:-mt-12">
        {{ home.philosophy }}
      </blockquote>
      <GoldRule class="mt-8" />
    </div>
  </section>

  <!-- ════ FEATURE PANELS ════ -->
  <section class="bg-sand">
    <div
      v-for="(feature, index) in home.features"
      :key="feature.title"
      class="max-w-7xl mx-auto"
    >
      <div
        :class="[
          'flex flex-col gap-8 lg:gap-0 py-16 lg:py-0',
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
        ]"
      >
        <!-- Image -->
        <div class="reveal lg:w-[55%] overflow-hidden">
          <img
            :src="featureImages[feature.image]"
            :alt="feature.title"
            class="w-full h-64 lg:h-[500px] object-cover"
            loading="lazy"
          />
        </div>

        <!-- Content -->
        <div class="reveal reveal-delay-2 lg:w-[45%] flex flex-col justify-center px-6 lg:px-16">
          <p class="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-3">{{ String(index + 1).padStart(2, '0') }}</p>
          <h2 class="font-display text-navy text-3xl lg:text-4xl font-bold mb-6">{{ feature.title }}</h2>
          <div class="w-12 h-px bg-gold mb-6"></div>
          <p class="text-charcoal/80 text-base lg:text-lg leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Divider between panels -->
      <div v-if="index < home.features.length - 1" class="h-px bg-navy/5 mx-6 lg:mx-12"></div>
    </div>
  </section>

  <!-- ════ TESTIMONIAL RIBBON ════ -->
  <section class="relative bg-navy py-20 lg:py-28 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1B2D45_0%,_#0D1B2A_70%)]"></div>

    <div class="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <p class="reveal text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-8">What Our Patients Say</p>

      <div class="relative min-h-[200px] flex items-center justify-center">
        <TransitionGroup name="testimonial-fade">
          <div v-for="(t, i) in featured" :key="i" v-show="currentTestimonial === i" class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="font-accent text-gold/40 text-6xl lg:text-8xl leading-none select-none mb-4">&ldquo;</span>
            <blockquote class="font-accent italic text-ivory text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl -mt-6">
              {{ t.message }}
            </blockquote>
            <p class="mt-6 text-gold text-sm uppercase tracking-[0.2em] font-body font-semibold">&mdash; {{ t.author }}</p>
          </div>
        </TransitionGroup>
      </div>

      <!-- Dots -->
      <div class="flex items-center justify-center gap-2 mt-8">
        <button
          v-for="(_, i) in featured"
          :key="i"
          @click="currentTestimonial = i"
          :class="[
            'w-2 h-2 rounded-full transition-all duration-300',
            currentTestimonial === i ? 'bg-gold w-6' : 'bg-ivory/20 hover:bg-ivory/40',
          ]"
          :aria-label="`View testimonial ${i + 1}`"
        />
      </div>
    </div>
  </section>

  <!-- ════ CONTACT & HOURS ════ -->
  <section class="bg-ivory py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="reveal text-center mb-12">
        <p class="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3">Visit Us</p>
        <h2 class="font-display text-navy text-3xl lg:text-4xl font-bold">Get in Touch</h2>
        <GoldRule class="mt-4" />
      </div>

      <div class="reveal reveal-delay-2 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Info -->
        <div class="space-y-8">
          <!-- Hours -->
          <div>
            <h3 class="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-4">Office Hours</h3>
            <table class="w-full text-sm">
              <tbody>
                <tr v-for="h in site.hours" :key="h.day" class="border-b border-navy/5">
                  <td class="py-2.5 text-charcoal font-medium">{{ h.day }}</td>
                  <td class="py-2.5 text-right text-slate">
                    {{ h.closed ? 'Closed' : `${h.open} – ${h.close}` }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-4">Contact</h3>
            <div class="space-y-2 text-sm">
              <p>
                <a :href="`tel:${site.phone.replace(/\./g, '')}`" class="text-charcoal hover:text-gold transition-colors">
                  {{ site.phone }}
                </a>
                <span class="text-slate ml-2">Phone</span>
              </p>
              <p>
                <span class="text-charcoal">{{ site.fax }}</span>
                <span class="text-slate ml-2">Fax</span>
              </p>
              <p>
                <a :href="`mailto:${site.email}`" class="text-charcoal hover:text-gold transition-colors">
                  {{ site.email }}
                </a>
              </p>
              <p class="text-charcoal pt-2">
                {{ site.address.street }}, {{ site.address.suite }}<br />
                {{ site.address.city }}, {{ site.address.state }} {{ site.address.zip }}
              </p>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="rounded-sm overflow-hidden shadow-lg h-80 lg:h-auto min-h-[320px]">
          <iframe
            :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(site.mapQuery)}`"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ BOTTOM CTA ════ -->
  <section class="bg-navy py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="reveal font-display text-ivory text-3xl lg:text-4xl font-bold">
        Ready to Start Your Recovery?
      </h2>
      <p class="reveal reveal-delay-1 text-ivory/60 mt-4 text-lg">
        Schedule your appointment today and take the first step toward a pain-free life.
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
