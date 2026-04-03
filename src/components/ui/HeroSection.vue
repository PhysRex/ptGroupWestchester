<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  description?: string
  dark?: boolean
  tall?: boolean
}>()
</script>

<template>
  <section
    :class="[
      'relative overflow-hidden',
      dark !== false ? 'bg-navy' : 'bg-ivory',
      tall ? 'py-32 lg:py-44' : 'py-20 lg:py-28',
    ]"
  >
    <!-- Navy gradient depth -->
    <div v-if="dark !== false" class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1B2D45_0%,_#0D1B2A_70%)]"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
      <div class="max-w-3xl">
        <h1
          class="reveal font-display font-bold tracking-tight leading-[1.1]"
          :class="dark !== false ? 'text-ivory text-4xl md:text-5xl lg:text-6xl' : 'text-navy text-4xl md:text-5xl lg:text-6xl'"
        >
          {{ title }}
          <span v-if="subtitle" class="block text-gold italic font-medium text-[0.65em] mt-2">{{ subtitle }}</span>
        </h1>

        <div class="gold-rule mt-6 !mx-0"></div>

        <p
          v-if="description"
          class="reveal reveal-delay-2 mt-8 text-lg lg:text-xl leading-relaxed max-w-2xl"
          :class="dark !== false ? 'text-ivory/70' : 'text-slate'"
        >
          {{ description }}
        </p>

        <slot />
      </div>
    </div>
  </section>
</template>
