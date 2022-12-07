<template>
  <div class="w-full">
    <div class="h-48 m-3 p-3 rounded-xl bg-white box shadow-lg drop-shadow-2xl">
      <div class="w-full flex justify-between ">
        <h2 class="pb-4 flex text-lg">
          <img v-bind:src="images.pear" class="mr-2" />
          {{ totalPears }}
        </h2>
        <h2 class="text-lg">{{ timeStamp[0] }}</h2>
      </div>

      <div class="w-full flex justify-between items-center">
        <img
          v-bind:src="albumCover"
          class="w-16 rounded-2xl"
        />
        <div class="ml-3 h-12 flex-col">
          <h3 class="font-bold text-base">{{ titleArtist[0][1] }}</h3>
          <h3 class="text-sm">{{ titleArtist[0][0] }}</h3>
        </div>
      </div>
      <div class="w-full flex justify-around mt-7">
        <h2>{{ KilometersRun[0] }} Km</h2>
        <h2>Time: {{ durationRun[0] }}</h2>
        <h2>{{ kpH[0] }} km/h</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BestSong",
  props: {
    historyRun: Array,
  },
  data() {
    return {
      timeStamp: [],
      KilometersRun: [],
      durationRun: [],
      titleArtist: [],
      totalPears: String,
      albumCover: String,
      kpH: [],
      images: {
        pear: require("../assets/pear.png"),
      },
    };
  },
  mounted() {

  },
  created() {
    this.convertTime();
    this.convertMeters();
    this.convertDuration();
    this.convertSpeed();
    this.totalPears = this.historyRun.pears.totalPearScore;
    this.albumCover = this.historyRun.pears.bestSong.cover_url;
  },
  methods: {
    convertTime() {
        let myDate = new Date(this.historyRun.timestamp * 1000);
        var curr_date = myDate.getDate();
        var curr_month = myDate.getMonth() + 1;
        var curr_year = myDate.getFullYear();
        let convertedDate = curr_date + "-" + curr_month + "-" + curr_year;
        this.timeStamp.push(convertedDate);
    },
    convertMeters() {
        let myDistanceRaw = this.historyRun.summary.distance / 1000;
        let myDistance = myDistanceRaw.toFixed(1);
        this.KilometersRun.push(myDistance);
    },
    convertDuration() {
        var value = Number(this.historyRun.summary.duration);
        var h = Math.floor(value / 3600);
        var m = Math.floor((value % 3600) / 60);
        var s = Math.floor((value % 3600) % 60);
        var hDisplay = h + ":";
        if (m < 10) {
          var mDisplay = "0" + m + ":";
        } else {
          mDisplay = m + ":";
        }
        if (s < 10) {
          var sDisplay = "0" + s;
        } else {
          sDisplay = s;
        }
        let totalDuration = hDisplay + mDisplay + sDisplay;
        this.durationRun.push(totalDuration);
    },
    convertSpeed() {
        var kmHour = (this.historyRun.summary.avgSpeed * 3600) / 1000;
        kmHour = kmHour.toFixed(1);
        this.kpH.push(kmHour);
        if (this.historyRun.pears.bestSong.title) {
          var title = this.historyRun.pears.bestSong.title.split(" - ");
        } else {
          title = ["No Best Song", "-"];
        }
        this.titleArtist.push(title);
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

