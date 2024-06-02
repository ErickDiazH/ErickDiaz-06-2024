<template>
  <!-- router link actions -->
  <div
    class="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start col-span-1"
  >
    <CNavButton v-if="$route.name !== 'HomeView'" to="/">Ver lista de pokémon</CNavButton>
    <CNavButton v-if="$route.name !== 'TeamView'" to="/team">Ver mi equipo</CNavButton>
  </div>
</template>

<script setup lang="ts">
import CNavButton from '@/components/common/CNavButton.vue'
</script>
