<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Page Not Found — PTG of Westchester',
})
</script>

<template>
  <section class="relative min-h-[70vh] flex items-center bg-navy overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1B2D45_0%,_#0D1B2A_70%)]"></div>

    <div class="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <p class="font-display text-gold/20 text-[10rem] lg:text-[14rem] font-bold leading-none select-none">404</p>
      <h1 class="font-display text-ivory text-3xl lg:text-4xl font-bold -mt-8 lg:-mt-12">
        Page Not Found
      </h1>
      <p class="text-ivory/60 mt-4 text-lg max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <RouterLink
        to="/"
        class="cta-glow inline-flex items-center gap-3 mt-8 px-10 py-4 bg-gold text-navy text-sm uppercase tracking-[0.2em] hover:bg-gold-light transition-all duration-300 rounded-sm font-bold"
      >
        Back to Home
      </RouterLink>
    </div>
  </section>
</template>
