<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useSiteContent } from '../../composables/useContent'
import BrandMark from '../ui/BrandMark.vue'

const site = useSiteContent()
const clickCount = ref(0)
let clickTimer: ReturnType<typeof setTimeout> | null = null

function handleCopyrightClick() {
  clickCount.value++
  if (clickTimer) clearTimeout(clickTimer)
  clickTimer = setTimeout(() => { clickCount.value = 0 }, 500)
  if (clickCount.value >= 3) {
    clickCount.value = 0
    const url = new URL(window.location.href)
    url.searchParams.set('admin', 'true')
    window.history.replaceState({}, '', url.toString())
    window.dispatchEvent(new CustomEvent('admin-toggle'))
  }
}

const fullAddress = `${site.address.street}, ${site.address.suite}, ${site.address.city}, ${site.address.state} ${site.address.zip}`
</script>

<template>
  <footer class="bg-navy text-ivory/80">
    <!-- Top section -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <BrandMark size="lg" class="mb-4" />
          <p class="text-sm leading-relaxed text-ivory/60">
            Exceptional one-on-one care by the most qualified licensed physical therapists.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-gold text-xs uppercase tracking-widest mb-4 font-semibold">Navigation</h4>
          <nav class="flex flex-col gap-2.5">
            <RouterLink to="/" class="text-sm hover:text-ivory transition-colors">Home</RouterLink>
            <RouterLink to="/team" class="text-sm hover:text-ivory transition-colors">Our Team</RouterLink>
            <RouterLink to="/services" class="text-sm hover:text-ivory transition-colors">Services</RouterLink>
            <RouterLink to="/testimonials" class="text-sm hover:text-ivory transition-colors">Patient Stories</RouterLink>
            <RouterLink to="/forms" class="text-sm hover:text-ivory transition-colors">Resources</RouterLink>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-gold text-xs uppercase tracking-widest mb-4 font-semibold">Contact</h4>
          <div class="flex flex-col gap-2.5 text-sm">
            <a :href="`tel:${site.phone.replace(/\./g, '')}`" class="hover:text-ivory transition-colors">
              {{ site.phone }}
            </a>
            <a :href="`mailto:${site.email}`" class="hover:text-ivory transition-colors">
              {{ site.email }}
            </a>
            <p>{{ fullAddress }}</p>
          </div>
        </div>

        <!-- Hours -->
        <div>
          <h4 class="text-gold text-xs uppercase tracking-widest mb-4 font-semibold">Hours</h4>
          <p class="text-sm">{{ site.hoursShort }}</p>
          <p class="text-sm text-ivory/40 mt-1">Sat – Sun: Closed</p>
          <a
            :href="site.hssUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block mt-6"
          >
            <img
              src="../../assets/images/logo/HSS-Logo-Official__compressed.png"
              alt="HSS Participating Member"
              class="h-10 opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-ivory/10">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ivory/40">
        <p class="cursor-default select-none" @click="handleCopyrightClick">
          &copy; {{ new Date().getFullYear() }} Physical Therapy Group of Westchester. All rights reserved.
        </p>
        <p>10 Rye Ridge Plaza, Suite 219, Rye Brook, NY 10573</p>
      </div>
    </div>
  </footer>
</template>
