<template>
  <div id="music-data" class="border-8 border-indigo-600">
    <div id="best-song" class="ml-4 mt-4">Best song</div>
    <div id="music-data-wrapper" class="p-4 grid grid-cols-4 grid-rows-2">
      <div
        id="best-song-album"
        class="h-32 w-32 border-8 border-indigo-500 row-span-2"
      >
        Album
      </div>
      <div
        id="title-artist"
        class="text-2xl self-center col-start-3 col-span-2"
      >
        Title + Artist
      </div>
      <div
        id="points"
        class="
          font-bold
          text-3xl
          self-center
          row-start-2
          col-start-3 col-span-2
        "
      >
        108 Points
      </div>
    </div>
    <div id="music-data-footer" class="flex flex-row justify-evenly">
      <div class="border-8 border-indigo-500 h-20 w-32">
        <p class="">10 KM</p>
      </div>
      <div class="border-8 border-indigo-500 h-20 w-32">
        <p class="">40 Min</p>
      </div>
      <div class="border-8 border-indigo-500 h-20 w-32">
        <p class="">1024 Steps</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardMusicData",
};
</script>

<style>
</style>