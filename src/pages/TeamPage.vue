<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useSiteContent, useTeamContent } from '../composables/useContent'
import { useScrollReveal } from '../composables/useScrollReveal'
import HeroSection from '../components/ui/HeroSection.vue'

const site = useSiteContent()
const team = useTeamContent()

useHead({
  title: 'Our Team — PTG of Westchester',
  meta: [
    { name: 'description', content: team.intro },
    { property: 'og:title', content: 'Our Team — Physical Therapy Group of Westchester' },
  ],
})

useScrollReveal()

// Dynamic image imports
import henryChen from '../assets/images/staff/henry-chen__compressed.jpg'
import karenMorissey from '../assets/images/staff/karen-morissey__compressed.jpg'

const staffImages: Record<string, string> = {
  'henry-chen__compressed.jpg': henryChen,
  'karen-morissey__compressed.jpg': karenMorissey,
}
</script>

<template>
  <div>
  <HeroSection title="Our Team" :description="team.intro" />

  <!-- ════ TEAM MEMBERS ════ -->
  <section class="bg-ivory">
    <div
      v-for="(member, index) in team.members"
      :key="member.name"
    >
      <div class="max-w-7xl mx-auto">
        <div
          :class="[
            'flex flex-col gap-8 lg:gap-0 py-12 lg:py-0',
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse',
          ]"
        >
          <!-- Photo -->
          <div class="reveal lg:w-[40%] overflow-hidden">
            <div class="relative">
              <img
                :src="staffImages[member.image]"
                :alt="member.name"
                class="w-full h-80 lg:h-[600px] object-cover object-top"
                loading="lazy"
              />
              <!-- Gold accent corner -->
              <div class="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/30"></div>
            </div>
          </div>

          <!-- Bio -->
          <div class="reveal reveal-delay-2 lg:w-[60%] flex flex-col justify-center px-6 lg:px-16 xl:px-20 py-8 lg:py-16">
            <p class="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-2">{{ member.credentials }}</p>
            <h2 class="font-display text-navy text-3xl lg:text-4xl font-bold mb-1">{{ member.name }}</h2>
            <p class="text-slate text-base font-body mb-6">{{ member.role }}</p>
            <div class="w-12 h-px bg-gold mb-6"></div>
            <p class="text-charcoal/80 text-base leading-[1.8]">
              {{ member.bio }}
            </p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div v-if="index < team.members.length - 1" class="h-px bg-navy/5 max-w-7xl mx-auto"></div>
    </div>
  </section>

  <!-- ════ BOTTOM CTA ════ -->
  <section class="bg-navy py-16 lg:py-20">
    <div class="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h2 class="reveal font-display text-ivory text-3xl lg:text-4xl font-bold">
        Meet Us In Person
      </h2>
      <p class="reveal reveal-delay-1 text-ivory/60 mt-4 text-lg">
        Schedule a visit and experience our personalized approach to physical therapy.
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
