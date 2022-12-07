<template>
<div class="h-screen bg-color background absolute">
<scale-loader :loading="loading" :color="color" class="loader"></scale-loader>
  <img
    class="absolute background"
    src="../assets/GradientBackground.png"
    alt=""
  />

  <div>
    <DashboardPoints :pears="totalPears" />

    <DashboardMascotteDashboard class="" />
    <template v-if="dataLoaded">
      <HeadText title="Last Run" color="black" />
      <BestSong :historyRun="historyRun" />
    </template>
    <DashboardStartBtn class="" />
    <NavBar />
  </div>
</div>
  
</template>

<script>
import NavBar from "../components/navBar.vue";
import DashboardPoints from "@/components/DashboardPoints.vue";
import DashboardMascotteDashboard from "@/components/DashboardMascotteDashboard.vue";
import DashboardStartBtn from "@/components/DashboardStartBtn.vue";
import BestSong from "@/components/BestSong.vue";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import HeadText from "../components/HeadText.vue";

export default {
  name: "app",
  components: {
    NavBar,
    DashboardPoints,
    DashboardMascotteDashboard,
    DashboardStartBtn,
    BestSong,
    ScaleLoader,
    HeadText,
  },
  props: {
    color: {
      default: "#A7E000",
    },
  },
  data() {
    return {
      DashboardActive: true,
      totalPears: 400521,
      stopButtonVissible: false,
      historyRun: [],
      dataLoaded: false,
      loading: true,
      // DashboardActive: true
    };
  },
  mounted() {
    this.fetchData();
  },

  computed: {},
  methods: {
    fetchData() {
      fetch(
        "http://trainer.awokenwell.com:8080/api/run/1865743f-9faa-41e6-8a70-74aa34726884"
      )
        .then((res) => res.json())
        .then((resdata) => {
          this.historyRun = resdata[0];
          this.dataLoaded = true;
          this.loading = false;
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.background {
  z-index: -1;
}
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: #F9F8F9;
}

.bg-color{
  background-color: #F9F8F9;
}

</style>
