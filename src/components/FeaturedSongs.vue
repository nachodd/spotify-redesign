<template>
  <div class="tracks-list">
    <ul class="tracks-list-items">
      <li v-for="track in tracks" :key="track.id" class="track-item">
        <div class="track-artwork">
          <img :src="track.artwork" :alt="track.title" />
        </div>
        <div class="track-info">
          <span class="track-title">{{ track.title }}</span>
          <div class="track-plays">
            <SpeakerWaveIcon class="track-plays-icon icon" />
            {{ track.plays }}
          </div>
        </div>
        <button class="track-like" :class="{ 'track-like-active': track.isLiked }" @click="toggleLike(track)">
          <HeartIcon class="icon" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { HeartIcon, SpeakerWaveIcon } from '@heroicons/vue/24/solid';

interface Track {
  id: number;
  title: string;
  artwork: string;
  plays: string;
  isLiked: boolean;
}

defineProps<{
  tracks: Track[]
}>();

const emit = defineEmits(['like'])

const toggleLike = (track: Track) => {
  emit('like', track.id)
}
</script>

<style lang="scss">
@use '@/assets/variables.scss' as *;

.tracks-list {
  border-radius: $track-item-border-radius;
  padding: $padding-medium;
  background-color: $black;
  color: $text-primary;
  min-width: 300px;

  .tracks-list-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $gap-medium;
  }
}

.icon {
  width: 18px;
  height: 18px;
}

.track-item {
  display: flex;
  align-items: center;
  padding: $track-item-padding;
  background-color: $track-item-background-color;
  border-radius: $track-item-border-radius;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: $track-item-hover-background-color;
  }

  .track-artwork {
    width: $track-item-artwork-width;
    height: $track-item-artwork-height;
    border-radius: $track-item-artwork-border-radius;
    overflow: hidden;
    margin-right: $track-item-artwork-margin-right;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .track-info {
    flex: 1;
    min-width: 0;
  }

  .track-title {
    display: block;
    font-size: $track-item-title-font-size;
    font-weight: 500;
    margin-bottom: $track-item-title-margin-bottom;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .track-plays {
    display: flex;
    align-items: center;
    gap: $track-item-plays-gap;
    color: $track-item-plays-color;
    font-size: $track-item-plays-font-size;

    .track-plays-icon {
      opacity: $track-item-plays-icon-opacity;
    }
  }

  .track-like {
    background: transparent;
    border: none;
    padding: $track-item-like-padding;
    color: $track-item-like-color;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;

    &:hover {
      color: $track-item-like-hover-color;
    }

    &.track-like-active {
      color: $track-item-like-active-color;

      &:hover {
        color: $track-item-like-active-color;
      }
    }
  }
}
</style>
