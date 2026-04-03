<script setup lang="ts">
defineProps<{
  wide?: boolean
}>()
</script>

<template>
  <div :class="['gold-rule', wide ? 'gold-rule-wide' : '']"></div>
</template>
