<template>
  <RouterLink class="bg-white text-black rounded py-2 px-3 font-bold text-center" :to="to">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>
