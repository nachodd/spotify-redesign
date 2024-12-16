<template>
  <div class="album-card">
    <div class="album-content">
      <div class="album-image">
        <img src="https://picsum.photos/250?e=5" alt="Album artwork" />
      </div>
      <div class="album-info">
        <h1 class="album-title">Tomorrow's tunes</h1>
        <p class="album-description">
          These are the tunes that will be trending tomorrow. Listen to them now!
        </p>
        <p class="album-stats">64 songs ~ 16 hrs+</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/variables.scss' as *;

.album-card {
  background-color: $black;
  border-radius: $album-card-border-radius;
  padding: $album-card-padding;
  color: $text-color;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }

  .album-content {
    position: relative;
  }

  .album-image {
    position: relative;
    border-radius: $album-image-border-radius;
    overflow: hidden;
    margin-bottom: $album-image-margin-bottom;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: transform 0.3s ease;

      @include hover-scale;
    }

    @include cover-after;
  }

  .album-info {
    position: relative;
    z-index: 1;
  }

  .album-title {
    font-size: $album-title-font-size;
    font-weight: 700;
    margin-bottom: $margin-small;
    background: linear-gradient(90deg, $text-color, $accent-color);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .album-description {
    font-size: $album-description-font-size;
    opacity: 0.8;
    margin-bottom: $album-description-margin-bottom;
    line-height: 1.5;
  }

  .album-stats {
    font-size: $album-stats-font-size;
    opacity: 0.6;
    font-weight: 500;
  }
}
</style>
