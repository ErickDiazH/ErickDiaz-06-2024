import { getPokemonSpeciesService } from '@/services/API/pokeapiServices'
import requestHttp from '@/services/requestHttp'
import { reactive, toRefs } from 'vue'

export default function usePokemonEvolutions() {
  const state = reactive({
    evolutions: [],
    isLoading: false,
    error: null
  })

  const getPokemonEvolutions = async (id: number) => {
    state.isLoading = true
    state.error = null

    try {
      const { data: dataSpecies } = await getPokemonSpeciesService(id)
      const evolutionChainUrl = dataSpecies.evolution_chain.url

      const { data: dataEvolutionChain } = await requestHttp(evolutionChainUrl)
      const evolutionChain = dataEvolutionChain

      // Function to recursively extract evolution details
      const extractEvolutions = (chain: any) => {
        const evolutionsList = []
        let current = chain

        do {
          evolutionsList.push({
            name: current.species.name,
            url: current.species.url
          })
          current = current.evolves_to[0]
        } while (current)

        return evolutionsList
      }

      state.evolutions = extractEvolutions(evolutionChain.chain)
    } catch (err) {
      state.error = 'Error al obtener evoluciones del pokemon'
    } finally {
      state.isLoading = false
    }
  }

  return {
    ...toRefs(state),
    getPokemonEvolutions
  }
}
