<template>
  <nav class="side-navigation" :class="{ expanded: isExpanded }" @mouseenter="isExpanded = true"
    @mouseleave="isExpanded = false">
    <div class="logo">

      <img src="@/assets/Spotify.svg" alt="Spotify" class="" />
    </div>

    <ul class="nav-items">
      <li class="nav-item active">
        <HomeIcon class="icon" />
        <span class="nav-text">Home</span>
      </li>
      <li class="nav-item">
        <GlobeAltIcon class="icon" />
        <span class="nav-text">Explore</span>
      </li>
      <li class="nav-item">
        <HeartIcon class="icon" />
        <span class="nav-text">Favorites</span>
      </li>
      <li class="nav-item">
        <Cog8ToothIcon class="icon" />
        <span class="nav-text">Settings</span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HomeIcon, GlobeAltIcon, HeartIcon, Cog8ToothIcon } from '@heroicons/vue/24/solid';

const isExpanded = ref(false);
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.side-navigation {
  background-color: $background-dark;
  padding: $padding-medium $padding-small;
  width: 72px;
  transition: width 0.3s ease;

  &.expanded {
    width: 240px;

    .nav-items .nav-item .nav-text {
      opacity: 1;
      visibility: visible;
    }
  }

  .logo {
    padding: 0 $padding-small;
    margin-bottom: $margin-medium;
    overflow: hidden;

    img {
      height: 25px;
    }
  }

  .nav-items {
    list-style: none;

    .nav-item {
      display: flex;
      align-items: center;
      padding: $padding-small;
      color: $text-secondary;
      cursor: pointer;
      border-radius: 4px;
      white-space: nowrap;

      &:hover {
        color: $text-primary;
      }

      &.active {
        color: $text-primary;
        background-color: $background-highlight;
      }

      .icon {
        width: 24px;
        height: 24px;
        margin-right: $margin-small;
        flex-shrink: 0;
      }

      .nav-text {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s ease;
      }
    }
  }
}
</style>
