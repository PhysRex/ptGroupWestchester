<script setup lang="ts">
import logoIcon from '../../assets/images/logo/logo-icon.png'

defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div class="flex items-center gap-2.5">
    <img
      :src="logoIcon"
      alt="PTG Logo"
      :class="[
        size === 'lg' ? 'h-12 w-12' : size === 'sm' ? 'h-7 w-7' : 'h-9 w-9',
      ]"
    />
    <div class="flex flex-col leading-tight">
      <span
        class="font-display text-gold tracking-[0.15em] font-semibold"
        :class="size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-base' : 'text-lg'"
      >PTG</span>
      <span
        class="font-display text-ivory/50 tracking-[0.1em] italic"
        :class="size === 'lg' ? 'text-xs' : 'text-[0.6rem] -mt-0.5'"
      >of Westchester</span>
    </div>
  </div>
</template>
