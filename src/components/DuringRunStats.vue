<template>
<div class="px-4">

<div class="grid grid-cols-3 place-items-center rounded-3xl shadow-2xl bg-white p-4 text-purple-600 text-base font-bold">
    <div class="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24.965"
        height="30.711"
        viewBox="0 0 24.965 30.711"
      >
        <path
          id="Path_155"
          data-name="Path 155"
          d="M783.421,61.979l1.158-1.2a1.232,1.232,0,0,0,0-1.695,1.122,1.122,0,0,0-1.629,0l-1.158,1.2a12.123,12.123,0,0,0-6.823-2.938V54.935h1.114a1.2,1.2,0,0,0,0-2.4h-4.532a1.2,1.2,0,0,0,0,2.4h1.114v2.412A12.965,12.965,0,1,0,786.3,70.271,13.2,13.2,0,0,0,783.421,61.979Zm-9.6,18.875a10.591,10.591,0,1,1,10.178-10.583A10.4,10.4,0,0,1,773.817,80.853Zm5.34-16.135a1.232,1.232,0,0,1,0,1.694l-4.525,4.705a1.121,1.121,0,0,1-1.629,0,1.231,1.231,0,0,1,0-1.694l4.525-4.705A1.121,1.121,0,0,1,779.157,64.718Z"
          transform="translate(-761.334 -52.539)"
          fill="#4a4949"
        />
      </svg>

      <p>{{ formattedElapsedTime }}</p>
    </div>

    <div v-if="sensorData.rsc" class="flex flex-col items-center">
      <svg id="Group_795" data-name="Group 795" xmlns="http://www.w3.org/2000/svg" width="25.497" height="30.711" viewBox="0 0 25.497 30.711">
  <path id="Path_157" data-name="Path 157" d="M846.026,90.552,835.17,85.326l3.955-2.087c-.4-.414-.866-.963-1.2-1.384L832.8,84.56a.917.917,0,0,0,.028,1.619L847.7,93.341A25.119,25.119,0,0,1,846.026,90.552Z" transform="translate(-832.323 -64.549)" fill="#4a4949"/>
  <g id="Group_793" data-name="Group 793" transform="translate(2.653)">
    <path id="Path_158" data-name="Path 158" d="M842.937,52.539A6.07,6.07,0,0,0,837,58.717c0,5.587,5.112,10.967,5.33,11.193a.842.842,0,0,0,1.223,0c.217-.226,5.33-5.606,5.33-11.193A6.07,6.07,0,0,0,842.937,52.539Zm-.028,8.787a2.611,2.611,0,1,1,2.509-2.609A2.564,2.564,0,0,1,842.909,61.326Z" transform="translate(-836.996 -52.539)" fill="#4a4949"/>
    <path id="Path_159" data-name="Path 159" d="M846.818,61.633a.811.811,0,1,0,.779.81A.8.8,0,0,0,846.818,61.633Z" transform="translate(-840.905 -56.265)" fill="#4a4949"/>
  </g>
  <g id="Group_794" data-name="Group 794" transform="translate(13.613 13.076)">
    <path id="Path_160" data-name="Path 160" d="M862.243,74.69a6.07,6.07,0,0,0-5.942,6.178c0,5.587,5.113,10.967,5.331,11.193a.842.842,0,0,0,1.223,0c.217-.226,5.33-5.606,5.33-11.193A6.07,6.07,0,0,0,862.243,74.69Zm-.028,8.817a2.611,2.611,0,1,1,2.509-2.609A2.564,2.564,0,0,1,862.215,83.507Z" transform="translate(-856.301 -74.69)" fill="#4a4949"/>
    <path id="Path_161" data-name="Path 161" d="M866.124,83.835a.81.81,0,1,0,.779.81A.8.8,0,0,0,866.124,83.835Z" transform="translate(-860.21 -78.437)" fill="#4a4949"/>
  </g>
</svg>

      <p>
        {{ sensorData.rsc.totalDistance }}
      </p>
    </div>

    <div v-if="sensorData.pedo" class="flex flex-col items-center">
      <svg id="Group_792" data-name="Group 792" xmlns="http://www.w3.org/2000/svg" width="21.741" height="30.711" viewBox="0 0 21.741 30.711">
  <path id="Path_154" data-name="Path 154" d="M700.815,75.579c1.625.567,3.059.928,5.12,1.575C705.143,87.356,695.683,83.3,700.815,75.579Zm8.446-9.372c-.107-3.063-.636-7.081-4.85-6.452-1.975.526-3.435,2.738-4.122,6.556a18.7,18.7,0,0,0,.287,6.811c.406,1.244.268,1.168.7,1.4,1.689.388,3.361.818,5.065,1.256C708.076,74.536,709.5,67.922,709.261,66.207Zm-13.005-.235a18.71,18.71,0,0,0,.287-6.811c-.686-3.818-2.146-6.031-4.122-6.556-4.214-.63-4.743,3.389-4.85,6.452-.236,1.714,1.186,8.33,2.916,9.575,1.7-.438,3.375-.867,5.065-1.256C695.988,67.14,695.85,67.217,696.256,65.972ZM690.9,70c.791,10.2,10.251,6.15,5.119-1.575C694.393,69,692.958,69.358,690.9,70Z" transform="translate(-687.546 -52.539)" fill="#4a4949"/>
</svg>

      <p>
        {{ sensorData.pedo.step }}
      </p>
    </div>
  </div>


</div>

</template>

<script>
import liveData from "../../raw_runscribe_steps_spotify.json";

export default {
  name: "DuringRunStats",
  data() {
    return {
      data: liveData,
      //Timer data
      elapsedTime: 0,
      timer: undefined,
      dataLoaded: false,

      //Initialiseer sensor data & bijbehorende waardes rsc & pedo
      sensorData: {
        rsc: {},
        pedo: {},
      },
      totalDistanceValue: 0,
      stepCountValue: 0,
    };
  },
  mounted() {
    this.start();
  },
  created() {
    this.sensorTimeLoop();
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
  },

  methods: {
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.elapsedTime = 0;
    },
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;

        //this.sensorMethod();
      }, 1000);
    },
    /*
    sensorMethod() {
      for (let i = 0; i < this.data.length; i++) {
        console.log(this.data[i].runscribe.name);
      }
    },

    */
    sensorTimeLoop() {
      var i = 0;
      setInterval(() => {
        // for (let i = 0; i < this.data.length; i++) {
        this.sensorTestMethod(i);
        i++;
        // }
      }, 100);
    },

    sensorTestMethod(i) {
      let sensorMethodData = this.data;

      //Single line if-statement
      this.totalDistanceValue = sensorMethodData[i].rsc
        ? sensorMethodData[i].rsc.totalDistance
        : 0;
      this.stepCountValue = sensorMethodData[i].pedo
        ? sensorMethodData[i].pedo.step
        : 0;

      this.dataLoaded = true;

      //Overschrijven als er een nieuwe waarde is
      if (this.totalDistanceValue > 0) {
        this.sensorData.rsc.totalDistance = this.totalDistanceValue;
      }

      if (this.stepCountValue > 0) {
        this.sensorData.pedo.step = this.stepCountValue;
      }
    },
  },
};
</script>

<style></style>
