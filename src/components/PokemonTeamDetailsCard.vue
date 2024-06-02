<template>
  <CCard class="grid grid-cols-1 md:grid-cols-2 relative">
    <IconSound
      class="cursor-pointer absolute top-3 left-3 w-8 text-gray-500 hover:bg-slate-200 rounded p-1"
      @click.stop="playSound"
    />
    <div class="flex h-full items-center justify-center">
      <div class="relative">
        <img
          class="rounded-t-md p-3"
          :src="getSrcImagePokemonSprite"
          :alt="`imagen de pokemon ${pokemon?.name}`"
        />
      </div>
    </div>
    <div class="text-left p-3">
      <div class="flex justify-between">
        <h3 class="text-xl font-bold capitalize">{{ pokemon?.name }}</h3>
        <p class="text-sm text-gray-400">#{{ pokemon?.id }}</p>
      </div>
      <div class="flex justify-between my-1">
        <div class="flex items-center group" role="button">
          <p class="text-gray-400">Estadísticas</p>
        </div>
        <div class="capitalize flex items-center justify-center gap-1">
          <template v-for="pokeType in pokemon?.types" :key="pokeType?.type?.url">
            <PokemonTypeBadge :label="pokeType?.type?.name" />
          </template>
        </div>
      </div>
      <div class="grid grid-cols-2 text-xs text-gray-400 -z-10 mt-3">
        <template v-for="pokeStat in pokemon?.stats" :key="pokeStat.url">
          <PokemonStat :label="pokeStat.stat.name" :value="pokeStat.base_stat" />
        </template>
      </div>
      <CDivider />
      <div class="text-gray-400 text-center mb-2">Características</div>
      <div class="text-gray-400 flex justify-around items-center text-sm">
        <p class="">Altura: {{ pokemon?.height }}</p>
        <p class="">Peso: {{ pokemon?.weight }}</p>
      </div>
      <CDivider />
      <div class="text-gray-400 text-center">Evoluciones</div>
      <PokemonEvolutionChainList v-if="pokemon" :id="pokemon?.id" />
    </div>
  </CCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CCard from '@/components/common/CCard.vue'
import PokemonTypeBadge from '@/components/PokemonTypeBadge.vue'
import PokemonStat from '@/components/PokemonStat.vue'
import IconSound from './icons/IconSound.vue'
import CDivider from './common/CDivider.vue'
import PokemonEvolutionChainList from './PokemonEvolutionChainList.vue'

const props = defineProps<{
  pokemon: any
}>()

const getSrcImagePokemonSprite = computed(
  () => props.pokemon?.sprites.other['official-artwork']?.front_default
)

const playSound = () => {
  new Audio(props.pokemon.cries.latest).play()
}
</script>
