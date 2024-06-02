<template>
  <button class="flex justify-center items-center sm:hidden">
    <IconArrowUp v-if="showPokemonList" class="w-7" />
    <IconArrowDown v-else class="w-7" />
  </button>
</template>

<script setup lang="ts">
import IconArrowUp from '@/components/icons/IconArrowUp.vue'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'

defineProps<{
  showPokemonList: boolean
}>()
</script>
