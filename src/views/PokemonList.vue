<template>
  <div v-if="isLoadingPokemonList">loading...</div>
  <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 container mx-auto"
    ref="scrollComponent"
  >
    <template v-if="pokemonList?.length > 0">
      <PokemonCard v-for="pokemon in pokemonList" :key="pokemon.name" :pokemon="pokemon" />
    </template>
  </div>
</template>

<script setup lang="ts">
import useGetPokemonList from '@/composables/API/useGetPokemonList'
import PokemonCard from '@/components/PokemonCard.vue'
import { onBeforeMount } from 'vue'
import useInfiniteScroll from '@/composables/useInfiniteScroll'

const {
  data,
  results: pokemonList,
  isLoading: isLoadingPokemonList,
  getPokemonList
} = useGetPokemonList()

onBeforeMount(async () => {
  const newPokemonList = await getPokemonList({
    limit: 25,
    offset: 0
  })
  pokemonList.value = newPokemonList
})

const loadMorePokemon = async () => {
  if (!isLoadingPokemonList.value && data.value?.next && pokemonList.value.length < 151) {
    // cantidad actual de pokemon
    const nextPageOffset = pokemonList.value?.length
    // solicita los siguientes 25 pokemon
    const newPokemonList = await getPokemonList({
      // hace el calculo para traer 25 resultados hasta llegar a 150 y traer solo 1 (151 - 150)
      limit: Math.min(25, 151 - nextPageOffset),
      offset: nextPageOffset || 0
    })
    if (newPokemonList) {
      pokemonList.value = [...pokemonList.value, ...newPokemonList]
    }
  }
}

const { scrollComponent } = useInfiniteScroll(loadMorePokemon)
</script>
