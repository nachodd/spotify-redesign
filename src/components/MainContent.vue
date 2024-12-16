<script setup lang="ts">
import SpotifyHeader from './SpotifyHeader.vue';
import PlaylistCard from './PlaylistCard.vue';
import FeaturedAlbumCard from './FeaturedAlbumCard.vue';
import FeaturedSongs from './FeaturedSongs.vue';
import ArtistGrid from './ArtistGrid.vue';
import FeaturedPlaylists from './FeaturedPlaylists.vue';
import { ref } from 'vue';

const popularArtists = [
  'Taylor Swift',
  'Drake',
  'The Weeknd',
  'Kendrick Lamar'
];

const featuredPlaylists = [
  {
    title: 'Top 50 - Global',
    imageUrl: 'https://picsum.photos/250?e=10',
    description: 'Daily update of the most played tracks right now.',
  },
  {
    title: 'Top 50 - Argentina',
    imageUrl: 'https://picsum.photos/250?e=11',
    description: 'Argentina\'s top 50 tracks right now.',
  }
];

const playlistCards = [
  {
    title: 'Daily Mix 3',
    description: 'Wiz Khalifa, Post Malone, Soulja Boy and more... Made for Guillherme Dourado - 50 songs, 3hr 5 min',
    likes: '53k',
    imageUrl: 'https://picsum.photos/250',
    bgColor: '#1DB954',
    showDetails: true,
    class: 'wide'
  },
  {
    title: 'Daily Mix 4',
    description: 'Drake, Taylor Swift, The Weeknd and more... Made for John Doe - 50 songs, 3hr 10 min',
    likes: '45k',
    imageUrl: 'https://picsum.photos/250?e=1',
    bgColor: '#FF5733',
    showDetails: false,
    class: ''
  },
  {
    title: 'Daily Mix 5',
    description: 'SZA, Kendrick Lamar, Post Malone and more... Made for Jane Doe - 50 songs, 3hr 15 min',
    likes: '60k',
    imageUrl: 'https://picsum.photos/250?e=2',
    bgColor: '#C70039',
    showDetails: false,
    class: ''
  },
  {
    title: 'Daily Mix 6',
    description: 'Eminem, Rihanna, Jay-Z and more... Made for Alex Smith - 50 songs, 3hr 20 min',
    likes: '70k',
    imageUrl: 'https://picsum.photos/250?e=3',
    bgColor: '#900C3F',
    showDetails: false,
    class: ''
  }
];

const tracks = ref([
  {
    id: 1,
    title: 'Anthem Part 2',
    artwork: 'https://picsum.photos/250?e=6',
    plays: '311k',
    isLiked: false
  },
  {
    id: 2,
    title: 'Don\'t leave me',
    artwork: 'https://picsum.photos/250?e=7',
    plays: '31107k',
    isLiked: false
  },
  {
    id: 3,
    title: 'Felling this',
    artwork: 'https://picsum.photos/250?e=8',
    plays: '280k',
    isLiked: false
  },
  {
    id: 4,
    title: 'Voyeur',
    artwork: 'https://picsum.photos/250?e=9',
    plays: '236k',
    isLiked: false
  },
  {
    id: 5,
    title: 'Obvious',
    artwork: 'https://picsum.photos/250?e=14',
    plays: '190k',
    isLiked: false
  },
  {
    id: 6,
    title: 'Dammit',
    artwork: 'https://picsum.photos/250?e=15',
    plays: '174k',
    isLiked: false
  }
]);

function likeTrack(trackId: number) {
  const track = tracks.value.find(track => track.id === trackId);
  if (track) {
    track.isLiked = !track.isLiked;
  }
}

</script>
<template>
  <main class="main-content">
    <SpotifyHeader />

    <div class="content">
      <section class="featured-section">
        <h2>Popular Artists</h2>
        <div class="playlist-row">
          <PlaylistCard v-for="(card, index) in playlistCards" :key="index" :title="card.title"
            :description="card.description" :likes="card.likes" :imageUrl="card.imageUrl" :bgColor="card.bgColor"
            :showDetails="card.showDetails" :class="card.class" />
        </div>

        <div>
          <h2>Featured Artist</h2>
          <ArtistGrid :artists="popularArtists" />
        </div>
      </section>

      <section class="featured-section three-cols">
        <div>
          <h2>Featured Playlists</h2>
          <FeaturedPlaylists :playlists="featuredPlaylists" />
        </div>

        <div>
          <h2>Featured Album</h2>
          <FeaturedAlbumCard />
        </div>

        <div>
          <h2>Featured Songs</h2>
          <FeaturedSongs :tracks="tracks" @like="likeTrack" />
        </div>

      </section>

    </div>
  </main>
</template>
<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;

.main-content {
  background: linear-gradient(to bottom, $background-softdark, $background-dark);
  height: 100%;
  overflow-y: auto;

  .content {
    padding: $padding-medium $padding-large;

    .featured-section {
      margin-bottom: $margin-large;

      &.three-cols {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: $gap-medium;
      }

      h2 {
        margin-bottom: $margin-medium;
        font-size: $font-size-large;
      }
    }

    .playlist-row {
      display: flex;
      gap: $gap-medium;
      margin-bottom: $margin-large;

      .playlist-card.wide {
        flex: 3;
        min-width: 300px;
        max-width: 400px;
      }

      .playlist-card {
        flex: 1;
        min-width: 100px;
        max-width: 200px;
      }
    }

  }
}
</style>
