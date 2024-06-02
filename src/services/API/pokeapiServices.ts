import requestHttp from '../requestHttp'
import type { Params } from '@/composables/API/useGetPokemonList'
import type { PokemonApiResponse } from '@/types'
import type { AxiosResponse } from 'axios'

// Servicio para obtener la lista de pokemon
export const getPokemonListService = async (
  params: Params
): Promise<AxiosResponse<PokemonApiResponse>> => {
  const response = await requestHttp(`/pokemon`, {
    params
  })
  return response
}

// Servicio para obtener el detalle de un pokemon
export const getPokemonDetailsService = async (id: number | string) => {
  const response = await requestHttp(`/pokemon/${id}`)
  return response
}

// Servicio para obtener las especies de un pokemon
export const getPokemonSpeciesService = async (id: number | string) => {
  const response = await requestHttp(`/pokemon-species/${id}`)
  return response
}

// Servicio para obtener las cadena de evoluciones de un pokemon
export const getPokemonEvolutionChainService = async (id: number | string) => {
  const response = await requestHttp(`/evolution-chain/${id}`)
  return response
}
