<template>
  <div class="w-full">
    <div
      class="
        h-22
        m-3
        p-3
        rounded-xl
        bg-white
        box
        shadow-lg
        drop-shadow-2xl
        flex
        justify-evenly
        items-end
      "
    >
      <div class="flex flex-col justify-between items-center h-full">
        <img v-bind:src="images.clock" class="w-6" />
        <h2 class="mt-2">{{ durationRun[0] }}</h2>
      </div>
      <div class="flex flex-col justify-between items-center h-full">
        <img v-bind:src="images.distance" class="w-6" />
        <h2 class="mt-2">{{ KilometersRun[0] }} km</h2>
      </div>
      <div class="flex flex-col justify-between items-center h-full">
        <img v-bind:src="images.steps" class="w-6" />
        <h2 class="mt-2">{{ kpH[0] }} km/h</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    historyRun: Object,
  },
  created() {
    this.convertDuration();
    this.convertMeters();
    this.convertSpeed();
  },
  data() {
    return {
      durationRun: [],
      kpH: [],
      KilometersRun: [],
      images: {
        clock: require("../assets/clock.svg"),
        steps: require("../assets/steps.svg"),
        distance: require("../assets/distance.svg"),
      },
    };
  },
  methods: {
    convertDuration() {
      let value = this.historyRun.summary.duration;
      value = Number(value);
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
    convertMeters() {
      let myDistanceRaw = this.historyRun.summary.distance / 1000;
      let myDistance = myDistanceRaw.toFixed(1);
      this.KilometersRun.push(myDistance);
    },
    convertSpeed() {
      var kmHour = (this.historyRun.summary.avgSpeed * 3600) / 1000;
      kmHour = kmHour.toFixed(1);
      this.kpH.push(kmHour);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #8b80f8;
  font-weight: 600;
  font-size: large;
  letter-spacing: 0.08em;
  margin-bottom: -8px;
}
</style>