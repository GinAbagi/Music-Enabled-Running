<template>
 
  <router-link :to="{ name: 'HistoryDetail', params: { index }}" :key="run.id" v-for="(run, index) in historyRun" class="w-full bg-color">
    <div class="h-48 m-3 p-3 rounded-xl bg-white box shadow-lg drop-shadow-2xl">
      <div class="w-full flex justify-between ">
        <h2 class="pb-4 flex text-lg">
          <img v-bind:src="images.pear" class="mr-2" />
          {{ run.pears.totalPearScore }}
        </h2>
        <h2 class="text-lg">{{ timeStamp[index] }}</h2>
      </div>

      <div class="w-full flex justify-between items-center">
        <img
          v-bind:src="run.pears.bestSong.cover_url"
          class="w-16 rounded-2xl"
        />
        <div class="ml-3 h-12 flex-col">
          <h3 class="font-bold text-base">{{ titleArtist[index][1] }}</h3>
          <h3 class="text-sm">{{ titleArtist[index][0] }}</h3>
        </div>
        <img v-bind:src="images.arrow" class="ml-auto w-6" />
      </div>
      <div class="w-full flex justify-around mt-7">
        <h2>{{ KilometersRun[index] }} Km</h2>
        <h2>Time: {{ durationRun[index] }}</h2>
        <h2>{{ kpH[index] }} km/h</h2>
      </div>
    </div>
  </router-link>
  <div class="footer"> ...</div>
</template>

<script>
export default {
  name: "detailRun",
  props: {
    historyRun: Array,
  },
  data() {
    return {
      timeStamp: [],
      KilometersRun: [],
      durationRun: [],
      titleArtist: [],
      kpH: [],
      images: {
        arrow: require("../assets/arrow.svg"),
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
  },
  methods: {
    convertTime() {
      this.historyRun.forEach((value) => {
        let myDate = new Date(value.timestamp * 1000);
        var curr_date = myDate.getDate();
        var curr_month = myDate.getMonth() + 1;
        var curr_year = myDate.getFullYear();
        let convertedDate = curr_date + "-" + curr_month + "-" + curr_year;
        this.timeStamp.push(convertedDate);
      });
    },
    convertMeters() {
      this.historyRun.forEach((value) => {
        let myDistanceRaw = value.summary.distance / 1000;
        let myDistance = myDistanceRaw.toFixed(1);
        this.KilometersRun.push(myDistance);
      });
    },
    convertDuration() {
      this.historyRun.forEach((value) => {
        value = Number(value.summary.duration);
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
      });
    },
    convertSpeed() {
      this.historyRun.forEach((value) => {
        var kmHour = (value.summary.avgSpeed * 3600) / 1000;
        kmHour = kmHour.toFixed(1);
        this.kpH.push(kmHour);
        if (value.pears.bestSong.title) {
          var title = value.pears.bestSong.title.split(" - ");
        } else {
          title = ["No Best Song", "-"];
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
.footer {
  height: 150px;
  width: 100vw;
}

.bg-color{
  background-color: #F9F8F9;
}

</style>

