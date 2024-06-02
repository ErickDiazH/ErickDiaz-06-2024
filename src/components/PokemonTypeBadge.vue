<template>
  <span
    class="transform px-2 py-1 rounded-full text-white text-xs shadow-sm"
    :class="`bg-${typeColors[label]}`"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { typeColors } from '@/utils/types'

defineProps<{
  label: string
}>()
</script>
