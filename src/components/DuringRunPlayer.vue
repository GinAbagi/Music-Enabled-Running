<template>
  <div class="mx-6 ">
    <div class="rounded-3xl shadow-2xl bg-white p-4 text-center relative mt-14 pt-12">
      <div class="image border-2 border-pearblue w-20 h-20 rounded-full p-1 absolute left-1/2 -top-10 transform -translate-x-1/2">
        <img :src="songs[activeSong].image" alt="" class="w-full h-full rounded-full">
      </div>
      <div class="song-info">
          <h3 class="font-bold">{{ songs[activeSong].title }}</h3>
          <span class="opacity-70">{{ songs[activeSong].artist }}</span>
      </div>
      <div class="song-progress mt-4">
        <div class="h-2 w-full rounded bg-gray-200 relative">
          <div class="absolute left-0 top-0 h-full bg-pearblue rounded transition-all duration-75" :style="{width: songPercentage + '%'}"></div>
        </div>
        <div class="song-progress-text flex justify-between mt-2">
          <p>{{ timeProgress }}</p>
          <p>-{{ timeLeft }}</p>
        </div>
      </div>
      <div class="song-controls flex justify-evenly">
        <button v-on:click="skipPrevious"><img src="@/assets/skipPrevious.png"/></button>
        <button class="bg-gradient-to-r from-peargreen to-pearblue rounded-full w-16 h-16" v-on:click="togglePlaying">
          <template v-if="!isPlaying"><img src="@/assets/play.png" class="ml-5"></template>
          <template v-else><img src="@/assets/pause.png" class="ml-5"></template>
        </button>
        <button v-on:click="skipNext"><img src="@/assets/skipNext.png"/></button>
      </div>

    </div>
  </div>
</template>

<script>
import TrAInerConnect from '../trainer/trAInerConnect.js'

// Convert millis to minutes and seconds format (i.e. 3:04)
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
      seconds == 60 ?
      (minutes+1) + ":00" :
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  );
}


export default {
  name: "DuringRunPlayer",
  data () {
    return { 
      isPlaying: true,
      songLength: 192000,
      songProgress: 0,
      activeSong: 0,
      songs: [
        {
          title: "Man On The Moon III",
          artist: "Kid Cudi",
          image: "/img/spotify-thumbnail.png"
        },
        {
          title: "Your power",
          artist: "Billie Elish",
          image: "/img/spotify-thumbnail2.png"
        }
      ]
    }
  },
  mounted: function() {
    // Move to "Start run" screen
    TrAInerConnect.spotifyConnect(); // Connect to spotify

    this.updateProgress();
  },
  methods: {
    togglePlaying: function () {
      this.updateProgress()
      if (this.isPlaying) {
        TrAInerConnect.spotifyPause(); // Pause song
      } else if (!this.isPlaying) {
        TrAInerConnect.spotifyResume(); // Resume song
      } else {
        // throw new SpotifyNotConnectedException()
      }
      this.isPlaying = !this.isPlaying // Inverse value
      // this.updateProgress();
    },
    skipPrevious: function() {
      TrAInerConnect.spotifySkipNext(); // Skip to next song
      this.resetProgress()
      this.changeSong()
    },
    skipNext: function() {
      TrAInerConnect.spotifySkipPrevious(); // Skip to previous song
      this.resetProgress()
      this.changeSong()
    },
    updateProgress: function() {
      // Update every 1000 ms, should be done everytime new spotify data comes in
      let intervalTime = 1000;

      let interval = setInterval(() => {
        if (this.songProgress >= this.songLength) {
          this.resetProgress()
          this.changeSong()
        }
        if (this.isPlaying) {
          this.songProgress += intervalTime
        }
        else {
          clearInterval(interval)
        }
      }, intervalTime);
    },
    resetProgress() {
      this.songProgress = 0
    },
    changeSong() {
      this.activeSong === 0 ? this.activeSong = 1 : this.activeSong = 0;
    }
  },
  computed: {
    timeLeft: function() {
      return millisToMinutesAndSeconds(this.songLength - this.songProgress)
    },
    songPercentage: function() {
      return (this.songProgress / this.songLength) * 100
    },
    timeProgress: function() {
      return millisToMinutesAndSeconds(this.songProgress)
    }
  }
  
};
</script>

<style>
</style>