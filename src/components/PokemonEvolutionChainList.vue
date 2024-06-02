<template>
  <div v-if="isLoadingEvolutionChain">
    <div>loading...</div>
  </div>
  <div v-else class="grid grid-cols-3">
    <template v-for="evolution in evolutions" :key="evolution.name">
      <PokemonEvolution :evolution />
    </template>
  </div>
</template>

<script setup lang="ts">
import useGetPokemonEvolutionChain from '@/composables/API/useGetPokemonEvolutionChain'
import PokemonEvolution from './PokemonEvolution.vue'
import { watchEffect } from 'vue'

const props = defineProps<{
  id: number
}>()

const {
  evolutions,
  isLoading: isLoadingEvolutionChain,
  getPokemonEvolutions
} = useGetPokemonEvolutionChain()

watchEffect(() => {
  getPokemonEvolutions(props.id)
})
</script>
