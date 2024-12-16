<template>
  <div class="search-container">
    <MagnifyingGlassIcon class="search-icon" />
    <input type="text" class="search-input" placeholder="Search..." v-model="searchQuery" @input="onSearch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';

const searchQuery = ref('');

const onSearch = () => {
  // not implemented
};
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.search-container {
  position: relative;
  width: $search-container-width;

  .search-icon {
    position: absolute;
    left: $search-icon-left;
    top: 50%;
    transform: translateY(-50%);
    width: $search-icon-width-height;
    height: $search-icon-width-height;
    color: $text-secondary;
  }

  .search-input {
    width: 100%;
    height: $search-input-height;
    background-color: $search-input-background-color;
    border: none;
    border-radius: $search-input-border-radius;
    padding: $search-input-padding;
    color: $text-primary;
    font-size: $font-size-small;

    &::placeholder {
      color: $text-secondary;
    }

    &:focus {
      outline: none;
      background-color: $search-input-focus-background-color;
    }
  }
}
</style>
