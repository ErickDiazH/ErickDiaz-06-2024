<template>
  <div v-if="isLoadingPokemonDetails">loading...</div>
  <div v-else class="grid grid-flow-row-dense grid-cols-1 gap-8 p-6 container mx-auto">
    <PokemonTeamDetailsCard :pokemon="pokemonDetails" />
  </div>
</template>

<script setup lang="ts">
import PokemonTeamDetailsCard from '@/components/PokemonTeamDetailsCard.vue'
import useGetPokemonDetails from '@/composables/API/useGetPokemonDetails'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const {
  data: pokemonDetails,
  isLoading: isLoadingPokemonDetails,
  getPokemonDetails
} = useGetPokemonDetails()

watchEffect(() => {
  getPokemonDetails(Number(route.params.id))
})
</script>
