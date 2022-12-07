<template>
  <div class="w-48">
    <router-link
      to="/History"
      class="
        h-9
        m-4
        p-3
        rounded-full
        bg-white
        box
        shadow-xl
        drop-shadow-2xl
        flex
        items-center
      "
    >
      <img v-bind:src="images.arrowBlack" class="ml-0" />
      <h2>{{ timeStamp[0] }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    historyRun: Object,
  },
  data() {
    return {
      timeStamp: [],
      images: {
        arrowBlack: require("../assets/arrowBlack.svg"),
      },
    };
  },
  created() {
    this.convertTime();
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
  },
};
</script>

<style scoped>
h2 {
  margin-top: 10px;
  margin-left: 13px;
  font-size: larger;
  font-weight: 600;
}
.items-center {
box-shadow: 1px 1px 28px -7px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 1px 28px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 1px 28px -7px rgba(0,0,0,0.75);
}
</style>