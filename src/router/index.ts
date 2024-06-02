import { createRouter, createWebHistory } from 'vue-router'
import { usePokemonTeamStore } from '@/stores/pokemonTeam'
import IndexLayout from '@/layout/IndexLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeContainerLayout',
      component: IndexLayout,
      children: [
        {
          path: '',
          name: 'HomeView',
          component: () => import('@/views/PokemonList.vue')
        },
        {
          path: '/team',
          name: 'TeamView',
          component: () => import('@/views/PokemonTeam.vue'),
          beforeEnter: (_to, _from, next) => {
            const pokemonStore = usePokemonTeamStore()
            // Si el equipo no esta completo, te redirecciona a la vista home
            if (pokemonStore.pokemonTeamCount === 0) {
              alert('Selecciona almenos un pokemon para acceder a esta vista')
              next('/')
            } else {
              next()
            }
          }
        },
        {
          path: '/team/:id',
          name: 'TeamDetailView',
          component: () => import('@/views/PokemonTeamDetails.vue'),
          beforeEnter: (to, _from, next) => {
            const pokemonId = Number(to.params.id)
            const pokemonStore = usePokemonTeamStore()
            // Si el pokemon no pertenece a tu equipo, te redirecciona a la vista home
            if (!pokemonStore.checkForRepeatPokemon(pokemonId)) {
              alert(`El pokemon con id ${pokemonId} no pertenece a tu equipo`)
              next('/')
            } else {
              next()
            }
          }
        }
      ]
    }
  ]
})

export default router
