<template>
  <div :key="run.id" v-for="(run, index) in songs" class="w-full">
    <div class="m-3 p-3 rounded-xl bg-white box shadow-lg drop-shadow-2xl">
      <div class="w-full flex items-center">
        <img v-bind:src="run.music.cover_url" class="w-20 rounded-2xl" />
        <div class="ml-2 flex-col">
          <h3 class="font-bold text-sm">{{ titleArtist[index][1] }}</h3>
          <h3 class="text-sm">{{ titleArtist[index][0] }}</h3>
        </div>
        <h2 class="flex text-lg flex-col w-32 h-24 items-end justify-evenly ml-auto">
          <img v-bind:src="ranking[index]" class="w-7" />
          <div class="flex flex-row">
            <img v-bind:src="images.pear" class="mr-2 w-5 h-8" />
            <p class="mt-2">{{ run.stats.pear_score }} </p>
          </div>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailRun",
  props: {
    detailsRun: Array,
  },
  data() {
    return {
      titleArtist: [],
      songs: [],
      images: {
        pear: require("../assets/pear.png"),
      },
      ranking: [
        require("../assets/firstPlace.svg"),
        require("../assets/secondPlace.svg"),
        require("../assets/thirdPlace.svg"),
      ],
    };
  },
  mounted() {
    this.songs = this.detailsRun[0];
    this.songs.sort((a, b) =>
      a.stats.pear_score < b.stats.pear_score ? 1 : -1
    );
    // console.log(this.songs);
    this.convertTitle();
  },
  created() {},
  methods: {
    convertTitle() {
      this.songs.forEach((value) => {
        if (value.title) {
          var title = value.title.split(" - ");
        } else {
          title = ["No Title", "-"];
        }
        this.titleArtist.push(title);
      });
    },
  },
};
</script>

<style scoped>
.h1 {
  margin-left: 15px;
  margin-top: 6px;
  font-weight: bold;
}
</style>

