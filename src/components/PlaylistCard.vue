<template>
  <div class="playlist-card" :style="{ backgroundColor: bgColor }">
    <div class="playlist-content">
      <div v-if="showDetails" class="playlist-info">
        <span class="label">PLAYLIST</span>
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <div class="stats">
          <div class="likes">
            <div class="avatar-group">
              <div class="avatar" v-for="i in 3" :key="i">
                <UserIcon class="icon" />
              </div>
            </div>
            <span>{{ likes }} Likes</span>
          </div>
        </div>
      </div>
      <div v-else class="playlist-info">
        <button class="play-button">
          <PlayIcon class="icon" />
        </button>
        <p class="small-text">{{ title }}</p>
      </div>
      <div :class="{ 'playlist-image': showDetails, 'playlist-image-normal': !showDetails }">
        <img :src="imageUrl" :alt="title" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon, PlayIcon } from '@heroicons/vue/24/solid';
defineProps<{
  title: string
  description: string
  likes: string
  imageUrl: string
  bgColor?: string
  showDetails?: boolean
}>()
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.playlist-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  padding: 20px;
  background-color: $primary-color;
  cursor: pointer;
  transition: all 0.3s ease;

  .playlist-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    min-height: 200px;
  }

  .playlist-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 60%;
    z-index: 1;

    .label {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }

    .title {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 8px;
    }

    .description {
      font-size: $font-size-small;
      opacity: 0.8;
      margin-bottom: 20px;
    }

    .stats {
      .likes {
        display: flex;
        align-items: center;
        gap: $gap-small;

        .avatar-group {
          display: flex;

          .avatar {
            width: $avatar-width-height;
            height: $avatar-width-height;
            border-radius: 50%;
            background: $avatar-background;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: $avatar-font-size;
            margin-right: $avatar-margin-right-negative;
            border: $avatar-border;

            .icon {
              width: $icon-width-height;
              height: $icon-width-height;
            }
          }
        }

        span {
          font-size: $font-size-small;
          opacity: 0.8;
        }
      }
    }

    .play-button {
      width: $play-button-width;
      height: auto;
      background-color: $play-button-background-color;
      border: none;
      color: $text-primary;
      padding: $play-button-padding;
      font-size: $play-button-font-size;
      border-radius: $play-button-border-radius;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        width: $icon-width-height;
        height: $icon-width-height;
      }
    }

    .small-text {
      font-size: $font-size-small;
      opacity: 0.8;
      margin-top: 10px;
    }
  }

  .playlist-image-normal {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 60%;
  }

  .playlist-image {
    position: absolute;
    right: -5%;
    bottom: -5%;
    width: 45%;
    transform: rotate(25deg);
  }

  .playlist-image-normal,
  .playlist-image {
    img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3));
    }
  }
}
</style>
