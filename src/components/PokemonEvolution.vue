<template>
  <div v-if="isLoadingPokemonDetails">loading...</div>
  <div v-else class="text-center">
    <img
      v-if="pokemonDetails"
      class="rounded p-3 w-52"
      :src="getSrcImagePokemonSprite"
      :alt="`imagen de pokemon ${evolution?.name}`"
    />
    <span class="text-gray-400">{{ evolution?.name?.toUpperCase() }}</span>
  </div>
</template>

<script setup lang="ts">
import useGetPokemonDetails from '@/composables/API/useGetPokemonDetails'
import { computed } from 'vue'

const props = defineProps<{
  evolution: { name: string; url: string }
}>()

const getSrcImagePokemonSprite = computed(
  () => pokemonDetails.value?.sprites.other['official-artwork']?.front_default
)

const {
  data: pokemonDetails,
  isLoading: isLoadingPokemonDetails,
  getPokemonDetails
} = useGetPokemonDetails()

getPokemonDetails(props.evolution.name)
</script>
