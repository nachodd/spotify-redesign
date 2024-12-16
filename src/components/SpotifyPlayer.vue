<template>
  <div class="player">
    <div class="track-info">
      <img src="https://i.scdn.co/image/ab67706f00000002305eee083b800152ae06ebed" alt="Album Art" class="album-art" />
      <div class="track-details">
        <div class="track-name">The kids aren't all right</div>
        <div class="artist">The Offspring</div>
      </div>
      <button class="like-button control-button">
        <HeartIcon />
      </button>
    </div>

    <div class="player-controls">
      <div class="main-controls">
        <button class="control-button">
          <QuestionMarkCircleIcon />
        </button>
        <button class="control-button">
          <BackwardIcon />
        </button>
        <button class="control-button play">
          <PlayIcon />
        </button>
        <button class="control-button">
          <ForwardIcon />
        </button>
        <button class="control-button">
          <ArrowPathIcon />
        </button>
      </div>
      <div class="progress-bar">
        <span class="time current">1:50</span>
        <div class="progress-track">
          <div class="progress-fill"></div>
        </div>
        <span class="time total">3:00</span>
      </div>
    </div>

    <div class="volume-controls">
      <button class="control-button">
        <SpeakerWaveIcon />
      </button>
      <div class="volume-slider">
        <div class="volume-fill"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionMarkCircleIcon, BackwardIcon, PlayIcon, ForwardIcon, ArrowPathIcon, SpeakerWaveIcon, HeartIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.player {
  background-color: $background-base;
  border-top: 1px solid $background-highlight;
  padding: $player-padding-vertical $player-padding-horizontal;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  height: $player-height;

  .track-info {
    display: flex;
    align-items: center;
    gap: $track-info-gap;

    .album-art {
      width: $album-art-width-height;
      height: $album-art-width-height;
      border-radius: $border-radius-small;
    }

    .track-details {
      .track-name {
        font-weight: $track-name-font-weight;
      }

      .artist {
        font-size: $artist-font-size;
        color: $text-secondary;
      }
    }

    .like-button {
      width: 16px;
      height: 16px;
    }
  }

  .player-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $gap-small;

    .main-controls {
      display: flex;
      align-items: center;
      gap: $gap-medium;
    }

    .progress-bar {
      display: flex;
      align-items: center;
      gap: $gap-small;
      width: 100%;
      max-width: 600px;

      .time {
        font-size: $time-font-size;
        color: $text-secondary;
      }

      .progress-track {
        flex: 1;
        height: $progress-bar-height;
        background-color: $background-highlight;
        border-radius: $progress-bar-border-radius;
        position: relative;

        .progress-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: $progress-fill-width;
          background-color: $text-primary;
          border-radius: $progress-bar-border-radius;
        }
      }
    }
  }

  .volume-controls {
    display: flex;
    align-items: center;
    gap: $gap-small;
    justify-content: flex-end;

    .volume-slider {
      width: $volume-slider-width;
      height: $progress-bar-height;
      background-color: $background-highlight;
      border-radius: $progress-bar-border-radius;
      position: relative;

      .volume-fill {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: $volume-fill-width;
        background-color: $text-primary;
        border-radius: $progress-bar-border-radius;
      }
    }
  }

  .control-button {
    background: none;
    border: none;
    color: $text-secondary;
    cursor: pointer;
    width: $control-button-width;
    color: $text-primary;

    &.play {
      width: $control-button-play-width-height;
      height: $control-button-play-width-height;
      border-radius: $control-button-play-border-radius;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
