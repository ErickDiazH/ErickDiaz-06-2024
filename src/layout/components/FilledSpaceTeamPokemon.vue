<template>
  <div
    v-if="pokemonTeam"
    class="bg-gray-800 rounded w-14 h-14 p-1 hover:scale-[1.15] transition-all duration-300"
  >
    <img
      class="max-h-14 cursor-pointer"
      :src="pokemonTeam.sprites?.other?.['official-artwork']?.front_default"
      :alt="`imagen de pokemon ${pokemonTeam.name}`"
      @click="showDetails(pokemonTeam.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{
  pokemonTeam: any
}>()

const showDetails = (id: number) => {
  router.push({
    name: 'TeamDetailView',
    params: {
      id
    }
  })
}
</script>
