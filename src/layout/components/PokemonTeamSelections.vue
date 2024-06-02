<template>
  <div class="flex justify-center sm:justify-end w-full col-span-2">
    <div class="grid grid-cols-3 md:grid-cols-6 gap-3">
      <!-- pokemon spaces -->
      <FilledSpaceTeamPokemon
        class="flex justify-center items-center"
        v-for="pokemonTeam in pokemonStore.pokemonTeamList"
        :key="pokemonTeam.id"
        :pokemonTeam
      />
      <!-- empty spaces -->
      <EmptySpaceTeamPokemon
        class="flex justify-center items-center"
        v-for="(_, index) in calculateEmptySpacesForPokemon"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import EmptySpaceTeamPokemon from './EmptySpaceTeamPokemon.vue'
import FilledSpaceTeamPokemon from './FilledSpaceTeamPokemon.vue'
import { usePokemonTeamStore } from '@/stores/pokemonTeam'
import { MAX_LENGHT_OF_TEAM } from '@/utils/constants'

const pokemonStore = usePokemonTeamStore()

const calculateEmptySpacesForPokemon = computed(
  () => MAX_LENGHT_OF_TEAM - pokemonStore.pokemonTeamCount
)
</script>
