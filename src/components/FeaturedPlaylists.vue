<template>
  <div class="playlist-grid">
    <div v-for="playlist in playlists" :key="playlist.title" class="playlist-card">
      <div class="playlist-image-container">
        <img :src="playlist.imageUrl" :alt="playlist.title" class="featured-playlist-cover" />
      </div>
      <h3>{{ playlist.title }}</h3>
      <p>{{ playlist.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  playlists: {
    title: string,
    imageUrl: string,
    description: string
  }[]
}>();
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.playlist-grid {
  display: flex;
  flex-direction: column;
  gap: $gap-medium;
}

.playlist-card {
  background: $black;
  padding: $padding-medium;
  border-radius: $border-radius-large;
  transition: background-color 0.3s ease;

  .playlist-image-container {
    position: relative;
    overflow: hidden;

    .featured-playlist-cover {
      width: 100%;
      height: auto;
      border-radius: $border-radius-medium;
      margin-bottom: $margin-small;
      object-fit: cover;
      transition: transform 0.3s ease;

      @include hover-scale;
    }

    @include cover-after;
  }



  &:hover {
    cursor: pointer;
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
