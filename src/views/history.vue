<template>
<div class=" bg-color background absolute">
  <img
    class="absolute background"
    src="../assets/GradientBackground.png"
    alt=""
  />
  <div class="container">
    <scale-loader
      :loading="loading"
      :color="color"
      class="loader"
    ></scale-loader>
    <div class="graph-container">
      <HeadText title="Last five runs" color="white" />
      <template v-if="dataLoaded">
        <HistoryGraph :historyRun="historyRun" />
      </template>
    </div>
    <HeadText title="History" color="black" />
    <div class="run-container">
      <template v-if="dataLoaded">
        <DetailRun :historyRun="historyRun" />
      </template>
    </div>
    <NavBar />
  </div>
</div>
  
</template>

<script>
import DetailRun from "../components/DetailRun";
import NavBar from "../components/navBar.vue";
import HistoryGraph from "../components/HistoryGraph.vue";
import HeadText from "../components/HeadText.vue";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

export default {
  name: "History",
  components: {
    DetailRun,
    HistoryGraph,
    NavBar,
    HeadText,
    ScaleLoader,
  },
  props: {
    color: {
      default: "#A7E000",
    },
  },
  data() {
    return {
      dataLoaded: false,
      historyRun: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(
        "http://trainer.awokenwell.com:8080/api/run/1865743f-9faa-41e6-8a70-74aa34726884"
      )
        .then((res) => res.json())
        .then((resdata) => {
          this.historyRun = resdata;
          this.dataLoaded = true;
          this.loading = false;
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>
.run-container {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  height: 40vh;
  width: 100vw;
  /* overflow: scroll;
  overflow-x: hidden; */
  background-color: #F9F8F9;
}
.graph-container {
  display: flex;
  flex-flow: column nowrap;
  height: 40vh;
  width: 100vw;
  /* background:  #F9F8F9; */
  margin-top: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  /* background-color: #F9F8F9; */
  width: 100vw;
}
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;

  width: 100vw;
  height: 100vh;
  background-color: #F9F8F9;
}

.background {
  z-index: -1;
}
</style>