<template>
<div class="h-screen bg-color background absolute">
<img
    class="absolute background"
    src="../assets/GradientBackground.png"
    alt=""
  />
  <div>
  <Points/>
  <DashboardMascotte />
  <DuringRunStats />
  <DuringRunPlayer />

 
  </div>
</div>
  
</template>
  
  

<script>
import DashboardMascotte from "@/components/DashboardMascotte.vue";
import DuringRunStats from "@/components/DuringRunStats.vue";
import DuringRunPlayer from "@/components/DuringRunPlayer.vue";
import TrAInerConnect from "../trainer/trAInerConnect.js";

// import Points from '@/components/points.vue';

import Points from "@/components/points.vue";

export default {
  name: "DuringRun",
  components: {
    DashboardMascotte,
    DuringRunStats,
    DuringRunPlayer,
    Points,
  },
  mounted: function () {
    TrAInerConnect.startSession();
    TrAInerConnect.startPolling();
    // onTrAInerData(["test"]);
  },
  data() {
    return {
      dataReceived: false,
      trainerDataCalled: 0,
    };
  },
  methods: {
    onTrainerData: function (data) {
      // data.forEach(element => {
      //   if (element.type === "Spotify" && element.playstate) {
      //     this.dataReceived = true
      //   }
      // })
      console.log(data);

      this.trainerDataCalled++;
    },
  },
};
</script>


<style scoped>
.background {
  z-index: -1;
}

.bg-color{
  background-color: #F9F8F9;
}

</style>
