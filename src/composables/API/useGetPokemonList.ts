import { reactive, toRefs } from 'vue'
import { getPokemonListService } from '@/services/API/pokeapiServices'
import type { PokemonApiResponse, PokemonResult } from '@/types'

export interface Params {
  limit: number
  offset: number
}

export interface PokemonState {
  data: PokemonApiResponse | null
  results: PokemonResult[]
  isLoading: boolean
  error: any
}

export default function () {
  const state = reactive<PokemonState>({
    data: null,
    results: [],
    isLoading: false,
    error: null
  })

  const getPokemonList = async (params: Params) => {
    try {
      const { data } = await getPokemonListService(params)
      const { results, ...rest } = data
      state.data = rest
      return results || []
    } catch (error: any) {
      console.error('Error al obtener lista de pokemon', error)
      state.error = error
    } finally {
      state.isLoading = false
    }
  }

  return {
    ...toRefs(state),
    getPokemonList
  }
}
