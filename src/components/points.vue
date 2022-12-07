<template>
  <!--Score div START-->
  <div class="flex flex-row justify-start p-3">
    <div
      class="shadow-xl rounded-3xl p-4 flex flex-row justify-between bg-white"
    >
      <svg
        class="m-auto mx-2"
        xmlns="http://www.w3.org/2000/svg"
        width="21.34"
        height="36.402"
        viewBox="0 0 21.34 36.402"
      >
        <g id="Group_784" data-name="Group 784" transform="translate(0 0)">
          <path
            id="Path_31"
            data-name="Path 31"
            d="M197.37,551.7h1.709l-1.242,3.086-.778.05Z"
            transform="translate(-185.259 -550.035)"
            fill="#141414"
          />
          <path
            id="Path_33"
            data-name="Path 33"
            d="M126.473,534.905s-.925-2.948-3.242-3.324a15.909,15.909,0,0,0-3.131-.313s.376,2.067,1.5,2.693S126.473,534.905,126.473,534.905Z"
            transform="translate(-114.558 -531.264)"
            fill="#a7e000"
          />
          <path
            id="Path_32"
            data-name="Path 32"
            d="M51.991,615.48c.329,3.769,5.423,5.559,9.389,5.771s10.549-1.322,11.658-5.644c1.272-4.96-2.4-5.944-2.167-14.693.05-1.886.313-3.424-.452-5.536-.805-2.225-2.963-5.672-5.875-5.762-3.634-.112-5.515,4.5-6.28,6.089-1.495,3.11-.367,4.228-1.631,6.931C56.151,603.665,51.59,610.893,51.991,615.48Z"
            transform="translate(-51.966 -584.868)"
            fill="#cce600"
          />
          <path
            id="Path_42"
            data-name="Path 42"
            d="M270.6,639.408"
            transform="translate(-252.817 -630.613)"
            fill="#929414"
          />
          <path
            id="Path_44"
            data-name="Path 44"
            d="M111.912,737.847l.183-.524Z"
            transform="translate(-107.037 -720.565)"
            fill="#fff"
          />
          <path
            id="Path_45"
            data-name="Path 45"
            d="M71.709,743.771"
            transform="translate(-70.103 -726.488)"
            fill="#fff"
          />
          <path
            id="Path_47"
            data-name="Path 47"
            d="M262.394,780.489"
            transform="translate(-245.281 -760.22)"
            fill="#fff"
          />
        </g>
      </svg>

      <div class="flex flex-col justify-items-end mr-0">
        <p class="text-2xl ml-4">
          {{ displayScore }}
        </p>

        <p class="text-sm">
          Earned
        </p>
      </div>
    </div>
  </div>
  <!--Score div END-->
</template>

<script>
// var goedBezigAudio = new Audio(require("../../public/audio/GoedTempo.wav"));
// var teHardAudio = new Audio(require("../../public/audio/teHard.wav"));
import liveData from "../../raw_runscribe_steps_spotify.json";

export default {
  name: "Points",
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

      //puntendata
      impactArray: [],
      strikeTypeArray: [],
      contactTimeArray: [],
      symetrieArray: [
        {
          left: null,
          right: null,
        },
      ],
      displayScore: 0,
    };
  },
  mounted() {},
  created() {
    this.sensorTimeLoop(), this.scoreMethod();
  },
  computed: {},

  methods: {
    sensorTimeLoop() {
      var i = 0;
      setInterval(() => {
        this.sensorTestMethod(i);
        i++;
      }, 100);
    },

    sensorTestMethod(i) {
      let sensorMethodData = this.data;

      //Vullen v.d. puntenarrays
      if (sensorMethodData[i].metrics) {
        if (sensorMethodData[i].metrics.impact) {
          this.impactArray.push(sensorMethodData[i].metrics.impact);

          //Checken of lef/right foot impact bestaat

          //Rightfoot
          if (sensorMethodData[i].runscribe.foot === "right") {
            //Checken of right-object al bestaat & pushen
            if (this.symetrieArray[this.symetrieArray.length - 1].right) {
              this.symetrieArray.push({
                right: sensorMethodData[i].metrics.impact,
              });
            } else {
              this.symetrieArray[this.symetrieArray.length - 1].right =
                sensorMethodData[i].metrics.impact;
            }
          }

          //Leftfoot
          if (sensorMethodData[i].runscribe.foot === "left") {
            //Checken of right-object al bestaat & pushen
            if (this.symetrieArray[this.symetrieArray.length - 1].left) {
              this.symetrieArray.push({
                left: sensorMethodData[i].metrics.impact,
              });
            } else {
              this.symetrieArray[this.symetrieArray.length - 1].left =
                sensorMethodData[i].metrics.impact;
            }
          }
          

          if (sensorMethodData[i].metrics.strikeType) {
            this.strikeTypeArray.push(sensorMethodData[i].metrics.strikeType);
          }
          if (sensorMethodData[i].metrics.contactTime) {
            this.contactTimeArray.push(sensorMethodData[i].metrics.contactTime);
          }
        }
      }
    },

    //Scoremethode
    scoreMethod() {
      setInterval(() => {
        //contactTime
        let contactTimeInRangeCount = 0;
        this.contactTimeArray.forEach((x) => {
          if (x >= 150 && x <= 500) {
            contactTimeInRangeCount++;
          }
        });

        let contactTimePercentage =
          (contactTimeInRangeCount / this.contactTimeArray.length) * 100;

        //Strike type
        let strikeTypeInRangeCount = 0;
        this.strikeTypeArray.forEach((x) => {
          if (x >= 8 && x <= 14) {
            strikeTypeInRangeCount++;
          }
        });

        let strikeTypePercentage =
          (strikeTypeInRangeCount / this.strikeTypeArray.length) * 100;

        //impact
        let impactInRangeCount = 0;
        this.impactArray.forEach((x) => {
          if (x >= 1.5 && x <= 3) {
            impactInRangeCount++;
          }

         
        });

        let impactPercentage =
          (impactInRangeCount / this.impactArray.length) * 100;

        //Symetrie
        let impactLeft = this.symetrieArray[this.symetrieArray.length - 1].left;
        let imapctRight = this.symetrieArray[this.symetrieArray.length - 1].right;
        let symetrieInRangeCount = 0

        if (impactLeft != null && imapctRight != null) {
          let phi = Math.atan2(1, impactLeft / imapctRight);
          let usi = Math.cos(phi) - Math.sin(phi); // can be negative
          let usi_abs = Math.abs(usi); // number between 0 and 1
          
          if(usi_abs < 0.5){
            symetrieInRangeCount++
          }
        }
        let symetriePercentage = 
        (symetrieInRangeCount / this.symetrieArray.length) * 100

        //TotaalScore
        let totalScore = Math.round(
          (contactTimePercentage + impactPercentage + strikeTypePercentage + symetriePercentage) / 4
        );
        this.displayScore += totalScore;

        

        //Logs
        console.log("contact score :" + contactTimePercentage);
        console.log("impact score :" + impactPercentage);
        console.log("strike type score :" + strikeTypePercentage);
        console.log("symetrie score :" + symetriePercentage);
        console.log("total score :" + totalScore);

        //Arrays leeggooien
        this.contactTimeArray = [];
        this.strikeTypeArray = [];
        this.impactArray = [];
        
      }, 6000);
    },
  },
};
</script>

<style></style>
