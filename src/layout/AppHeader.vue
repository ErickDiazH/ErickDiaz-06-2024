<template>
  <div
    class="bg-slate-700 fixed w-full top-0 left-0 z-[9999] text-white min-h-24 flex items-center justify-center"
  >
    <div
      class="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-8 md:gap-8 p-8 justify-center"
    >
      <!-- router link actions -->
      <AppNavbar />
      <!-- selected team -->
      <PokemonTeamSelections />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from './AppNavbar.vue'
import PokemonTeamSelections from './components/PokemonTeamSelections.vue'
</script>
