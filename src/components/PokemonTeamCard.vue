<template>
  <CCard class="cursor-pointer" @click="showDetails">
    <div class="relative">
      <img
        class="rounded-t-md p-3 hover:scale-90 transition-all duration-300"
        :src="getSrcImagePokemonSprite"
        :alt="`imagen de pokemon ${pokemon?.name}`"
      />
      <IconSound
        class="cursor-pointer absolute top-3 left-3 w-8 text-gray-500 hover:bg-slate-200 rounded p-1"
        @click.stop="playSound"
      />
      <IconDelete
        class="cursor-pointer absolute top-3 right-3 w-8 text-gray-500 hover:bg-slate-200 rounded p-1"
        @click.stop="removePokemon"
      />
    </div>
    <div class="text-left p-3">
      <div class="flex justify-between">
        <h3 class="text-xl font-bold capitalize">{{ pokemon?.name }}</h3>
        <p class="text-sm text-gray-400">#{{ pokemon?.id }}</p>
      </div>
      <div class="flex justify-between my-1">
        <div class="flex items-center group" role="button">
          <p class="text-gray-400 text-sm">Estadísticas</p>
        </div>
        <div class="capitalize flex items-center justify-center gap-1">
          <template v-for="pokeType in pokemon.types" :key="pokeType.type.url">
            <PokemonTypeBadge :label="pokeType.type.name" />
          </template>
        </div>
      </div>
      <div class="grid grid-cols-2 text-xs text-gray-400 -z-10 mt-3">
        <template v-for="pokeStat in pokemon.stats" :key="pokeStat.url">
          <PokemonStat :label="pokeStat.stat.name" :value="pokeStat.base_stat" />
        </template>
      </div>
    </div>
  </CCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CCard from '@/components/common/CCard.vue'
import { usePokemonTeamStore } from '@/stores/pokemonTeam'
import PokemonTypeBadge from '@/components/PokemonTypeBadge.vue'
import PokemonStat from '@/components/PokemonStat.vue'
import IconSound from './icons/IconSound.vue'
import IconDelete from './icons/IconDelete.vue'
import router from '@/router'

const props = defineProps<{
  pokemon: any
}>()

const getSrcImagePokemonSprite = computed(
  () => props.pokemon.sprites.other['official-artwork']?.front_default
)

const pokemonStore = usePokemonTeamStore()

const removePokemon = () => {
  // TODO: crear un componente de confirmación
  const isDeleted = confirm('¿Estas seguro? Se eliminara este pokemon de tu equipo')
  isDeleted && pokemonStore.removePokemonFromTeam(props.pokemon.id)

  if (pokemonStore.pokemonTeamCount === 0) {
    router.push({ name: 'HomeView' })
  }
}

const playSound = () => {
  new Audio(props.pokemon.cries.latest).play()
}

const showDetails = () => {
  router.push({
    name: 'TeamDetailView',
    params: {
      id: props.pokemon.id
    }
  })
}
</script>
