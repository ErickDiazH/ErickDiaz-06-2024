<template>
  <div
    v-if="pokemonStore.pokemonTeamCount > 0"
    class="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 container mx-auto"
  >
    <PokemonTeamCard
      v-for="pokemon in pokemonStore?.pokemonTeamList"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
  <div v-else class="h-full flex items-center justify-center">
    Agrega pokemones a tu equipo para verlos aqui.
  </div>
</template>

<script setup lang="ts">
import { usePokemonTeamStore } from '@/stores/pokemonTeam'
import PokemonTeamCard from '@/components/PokemonTeamCard.vue'

const pokemonStore = usePokemonTeamStore()
</script>
