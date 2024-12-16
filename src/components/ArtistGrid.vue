<template>
  <div class="artist-grid">
    <div v-for="(artist, i) in artists" :key="artist" class="artist-card">
      <div class="artist-image">
        <img :src="`https://xsgames.co/randomusers/avatar.php?g=pixel&k=${i}`" :alt="artist">
      </div>
      <h3>{{ artist }}</h3>
      <p>Artist</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  artists: string[]
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.artist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: $gap-medium;
}

.artist-card {
  background: $black;
  padding: $padding-medium;
  border-radius: $border-radius-medium;
  transition: background-color 0.3s ease;

  &:hover {
    background: $background-base;
    cursor: pointer;
  }

  .artist-image {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin-bottom: $margin-small;

    img {
      width: 150px;
      height: 150px;
      background: $background-base;
      border-radius: 50%;
    }
  }

  h3 {
    font-size: $font-size-medium;
    margin-bottom: $margin-small;
  }

  p {
    color: $text-secondary;
    font-size: $font-size-small;
  }
}
</style>
