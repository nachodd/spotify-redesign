<script setup lang="ts">
import MainContent from './components/MainContent.vue'
import SpotifyNavigation from './components/SpotifyNavigation.vue'
import SpotifyPlayer from './components/SpotifyPlayer.vue'
</script>

<template>
  <div class="spotify-app">
    <SpotifyNavigation />
    <MainContent />
    <SpotifyPlayer />
  </div>
</template>

<style lang="scss">
@use '@/assets/variables.scss' as *;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: $background-dark;
  color: $text-primary;
}

.spotify-app {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 90px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.player {
  grid-column: 1 / -1;
}
</style>
