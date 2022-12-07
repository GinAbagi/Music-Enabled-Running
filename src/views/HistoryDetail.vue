<template>
<img class="absolute h-48 background" src="../assets/GradientBackground.png" alt=""> 
  <div class="container">
    <scale-loader
      :loading="loading"
      :color="color"
      class="loader"
    ></scale-loader>
    <template v-if="dataLoaded">
      <div class="back-container">
        <BackButton :historyRun="historyRun" class="fixed z-50" />
      </div>
      <HeadText title="Run stats" color="white" />
      <div class="run-container">
        <DetailRunIcon :historyRun="historyRun" />
      </div>
      <HeadText title="Pears earned per song" color="black" />
      <div class="graph-container">
        <PearGraph :detailsRun="detailsRun"/>
      </div>
      <HeadText title="Mapped run" color="black" />
      <div class="map-container">
        <RunMap :detailsRun="detailsRun" />
      </div>
      <HeadText title="Best songs" color="black" />
      <div class="song-container">
        <TopSongs :detailsRun="detailsRun" />
      </div>
    </template>
  </div>
</template>

<script>
import DetailRunIcon from "../components/DetailRunIcon.vue";
import BackButton from "../components/BackButton.vue";
import PearGraph from "../components/PearGraph.vue";
import RunMap from "../components/RunMap.vue";
import TopSongs from "../components/TopSongs.vue";
import HeadText from "../components/HeadText.vue";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

export default {
  name: "HistoryDetail",
  props: {
    index: {
      type: String,
      default: "0",
    },
    color: {
      default: "#A7E000",
    },
  },
  components: {
    DetailRunIcon,
    BackButton,
    PearGraph,
    RunMap,
    TopSongs,
    HeadText,
    ScaleLoader,
  },
  data() {
    return {
      historyRun: [],
      detailsRun: [],
      topSongs: [],
      dataLoaded: false,
      isLoading: true,
      loading: true,
    };
  },
  mounted() {
    fetch(
      "http://trainer.awokenwell.com:8080/api/run/1865743f-9faa-41e6-8a70-74aa34726884"
    )
      .then((res) => res.json())
      .then((resdata) => {
        this.historyRun = resdata[this.index];
        this.fetchDetails();
      })
      .catch((err) => console.log(err.message));
  },
  methods: {
    fetchDetails() {
      var link =
        "http://trainer.awokenwell.com:8080/api/run/1865743f-9faa-41e6-8a70-74aa34726884/" +
        this.historyRun.sessionData.uuid;
      fetch(link)
        .then((res) => res.json())
        .then((resdata) => {
          this.detailsRun.push(resdata.sections);
          if (this.detailsRun[0].length === 0) {
            this.loading = false;
            this.$router.push({path: '/history'});
          } else {
            this.dataLoaded = true;
            this.loading = false;
          }
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
  height: 15vh;
  width: 100vw;
  overflow: scroll;
  overflow-x: hidden;
}
.graph-container {
  display: flex;
  flex-flow: column nowrap;
  height: 34vh;
  width: 100vw;
  margin-top: 20px;
}
.map-container {
  display: flex;
  flex-flow: column nowrap;
  height: 35vh;
  width: 100vw;
  margin-top: 20px;
}
.song-container {
  display: flex;
  flex-flow: column nowrap;
  height: 35vh;
  width: 100vw;
}
.back-container {
  height: 10vh;
  z-index: 99;
}
.container {
  display: flex;
  flex-direction: column;
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
  background: white;
}

.bg-color{
  background-color: #F9F8F9;
}

</style>