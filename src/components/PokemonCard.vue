<template>
  <CCard
    class="cursor-pointer transition-shadow"
    :class="{ 'shadow-xl': isPokemonInTeam }"
    @click="addPokemon"
  >
    <img
      class="rounded-t-md p-3 hover:scale-90 transition-all duration-300"
      :class="{ 'opacity-50': isPokemonInTeam }"
      :src="getSrcImagePokemonSprite"
      :alt="`imagen de pokemon ${pokemonDetails?.name}`"
    />
    <div class="text-left p-3">
      <div class="flex justify-between">
        <h3 class="text-xl font-bold capitalize">
          {{ pokemonDetails?.name }}
        </h3>
        <p class="text-sm text-gray-400">#{{ pokemonDetails?.id }}</p>
      </div>
    </div>
  </CCard>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { usePokemonTeamStore } from '@/stores/pokemonTeam'
import CCard from '@/components/common/CCard.vue'

export interface PokemonResult {
  name: string
  url: string
}

interface Props {
  pokemon: PokemonResult
}
const props = defineProps<Props>()

const pokemonDetails = ref<{ name: string; id: number; sprites: any; types: any[] } | null>(null)

onBeforeMount(async () => {
  const response = await fetch(props.pokemon.url)
  pokemonDetails.value = await response.json()
})

const getSrcImagePokemonSprite = computed(
  () => pokemonDetails.value?.sprites?.other?.['official-artwork']?.front_default
)

// const getFirstPokemonTypeColor = computed(
//   () => typeColors[pokemonDetails.value?.types[0].type.name]
// )

const isPokemonInTeam = computed(() =>
  pokemonStore.pokemonTeamList.some((poke) => poke?.id === pokemonDetails.value?.id)
)

const pokemonStore = usePokemonTeamStore()

const addPokemon = () => {
  pokemonStore.togglePokemonToTeam(pokemonDetails.value)
}
</script>
