import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { MAX_LENGHT_OF_TEAM } from '@/utils/constants'
import storage from '@/utils/storage'

export const usePokemonTeamStore = defineStore('pokemonTeam', () => {
  const pokemonTeam = ref<any[]>([])

  // GETTERS
  const pokemonTeamCount = computed(() => pokemonTeam.value.length)
  const pokemonTeamList = computed(() => pokemonTeam.value)

  // Precarga los datos provenientes del storage
  const pokemonTeamStorage = storage.get('pokemonTeam')
  if (pokemonTeamStorage) {
    pokemonTeam.value = pokemonTeamStorage
  }

  // ACTIONS

  // Agrega/quita del equipo al pokemon seleccionado
  const togglePokemonToTeam = (pokemon: any) => {
    const alreadyInTeam = checkForRepeatPokemon(pokemon.id)
    if (alreadyInTeam) {
      removePokemonFromTeam(pokemon.id)
      return
    }
    if (checkTeamIsFull()) {
      alert('Tu equipo esta completo!')
      return
    }
    pokemonTeam.value.push(pokemon)
    storage.set('pokemonTeam', pokemonTeam.value)
  }

  // Quita al pokemon del equipo
  const removePokemonFromTeam = (id: number) => {
    pokemonTeam.value = pokemonTeam.value.filter((poke: any) => poke.id !== id)
    storage.set('pokemonTeam', pokemonTeam.value)
  }

  // Quita todos los pokemon del equipo
  const clearPokemonTeam = () => {
    pokemonTeam.value = []
  }

  // UTILS

  // Verifica si el equipo esta completo
  const checkTeamIsFull = () => {
    return pokemonTeamCount.value === MAX_LENGHT_OF_TEAM
  }

  // Verifica si el pokemon que se quiere agregar ya existe en el equipo
  const checkForRepeatPokemon = (id: number) => {
    const alreadyInTeam = pokemonTeam.value.some((pokemon: any) => pokemon.id === id)
    return alreadyInTeam
  }

  return {
    checkForRepeatPokemon,
    clearPokemonTeam,
    pokemonTeam,
    pokemonTeamCount,
    pokemonTeamList,
    removePokemonFromTeam,
    togglePokemonToTeam
  }
})
