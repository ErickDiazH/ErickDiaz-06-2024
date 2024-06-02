import { reactive, toRefs } from 'vue'
import { getPokemonDetailsService } from '@/services/API/pokeapiServices'

export default function () {
  const state = reactive({
    data: null,
    isLoading: false,
    error: null
  })

  const getPokemonDetails = async (id: number | string) => {
    try {
      const { status, data } = await getPokemonDetailsService(id)
      if (status === 200) state.data = data
    } catch (error: any) {
      console.error('Error al obtener detalles pokemon', error)
      state.error = error
    } finally {
      state.isLoading = false
    }
  }

  return {
    ...toRefs(state),
    getPokemonDetails
  }
}
