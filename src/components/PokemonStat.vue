<template>
  <div class="capitalize text-left mb-1.5">{{ label }}</div>
  <div class="bg-gray-200 mb-1.5 rounded-full shadow-sm overflow-hidden relative">
    <span class="absolute left-0 right-0 w-full z-10 text-gray-300 text-xxs text-center">{{
      MAX_STAT
    }}</span>
    <div
      class="rounded-l-full text-center text-white text-xs z-20 relative"
      :class="statColors[label]"
      :style="{ width: `${(value / MAX_STAT) * 100}%` }"
    >
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { MAX_STAT } from '@/utils/constants'
import { statColors } from '@/utils/stats'

defineProps<{
  label: string
  value: number
}>()
</script>
