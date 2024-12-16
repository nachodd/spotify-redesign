<template>
  <header class="header">
    <div class="user-controls">
      <div class="navigation-buttons">
        <button class="nav-button">◀</button>
        <button class="nav-button">▶</button>
      </div>
      <SearchInput />
      <button class="user-button">
        <span class="avatar">
          <UserIcon />
        </span>
        <span class="username">User Name</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchInput from './SearchInput.vue';
import { UserIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.header {
  padding: $header-padding-vertical $header-padding-horizontal;
  position: sticky;
  top: 0;
  background: $black;
  z-index: 5;

  .user-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: $gap-medium;

    .navigation-buttons {
      display: flex;
      gap: $gap-small;

      .nav-button {
        background: $background-opacity;
        border: none;
        color: $text-primary;
        width: $nav-button-size;
        height: $nav-button-size;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          background: $background-opacity-hover;
        }
      }
    }

    .user-button {
      display: flex;
      align-items: center;
      background: $background-opacity;
      border: none;
      padding: $user-button-padding-vertical $user-button-padding-horizontal;
      border-radius: $user-button-border-radius;
      color: $text-primary;
      cursor: pointer;

      .avatar {
        margin-right: $avatar-margin-right;
        width: $avatar-size;
        height: $avatar-size;
      }

      &:hover {
        background: $background-opacity-hover;
      }
    }
  }
}
</style>
