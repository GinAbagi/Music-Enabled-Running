<template>
  <!-- stop run btn & Pear commentaar BEGIN-->
  <div class="grid grid-cols-2 gap-4 w-full">
    <!--Pear-->
    <video
      id="vidID"
      autoplay
      class="w-4/5 ml-8 pt-10"
      :src="videoURL"
      :loop="videoLooping"
    ></video>

    <div class="w-full">
      <div class="flex flex-col justify-between h-full">
        <!--Pear commentaar -->
        <img
          class="w-44 absolute z-1"
          src="../../public/img/icons/inAppIcons/pearMessage.png"
        />

        <p class="text-lg w-40 px-8 pt-4">
          {{ tekstFeedback }}
        </p>

        <!--Stop btn -->
        <div class="flex flex-row justify-end p-6">
          <router-link
            class=" shadow-xl rounded-full h-16 w-16 flex items-center justify-center"
            to="/Dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.73"
              height="28.73"
              viewBox="0 0 28.73 28.73"
            >
              <path
                id="Path_184"
                data-name="Path 184"
                d="M2.972,0H25.758A2.972,2.972,0,0,1,28.73,2.972V25.758a2.972,2.972,0,0,1-2.972,2.972H2.972A2.972,2.972,0,0,1,0,25.758V2.972A2.972,2.972,0,0,1,2.972,0Z"
                fill="#4a4949"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!--Score div START-->
</template>

<script>
import liveData from "../../raw_runscribe_steps_spotify.json";
export default {
  name: "DashboardMascotte",
  data() {
    return {
      data: liveData,

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

      //Tekstfeedback data
      tekstFeedback: "Feedback",

      //Videofeedback
      videoURL: "/video/dashboardLoop.mp4",
      videoLooping: true,
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
            console.log(x) 
          }

         
          if (x < 8) {
            console.log("Strike < 8")
            this.videoURL = "/video/LoopMeerOpMiddenvoet.mp4";
            this.videoLooping = false
            this.tekstFeedback = "Loop meer op je middenvoet!"
            var vidID = document.getElementById('vidID')
          vidID.onended = () => {
          this.videoLooping = true;
          this.videoURL = "/video/dashboardLoop.mp4";
          this.tekstFeedback = "Ik ben peer"
          }
          }

          
        })

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
        let imapctRight = this.symetrieArray[this.symetrieArray.length - 1]
          .right;
        let symetrieInRangeCount = 0;

        if (impactLeft != null && imapctRight != null) {
          let phi = Math.atan2(1, impactLeft / imapctRight);
          let usi = Math.cos(phi) - Math.sin(phi); // can be negative
          let usi_abs = Math.abs(usi); // number between 0 and 1

          if (usi_abs < 0.5) {
            symetrieInRangeCount++;
          }
        }
        let symetriePercentage =
          (symetrieInRangeCount / this.symetrieArray.length) * 100;

        //TotaalScore
        let totalScore = Math.round(
          (contactTimePercentage +
            impactPercentage +
            strikeTypePercentage +
            symetriePercentage) /
            4
        );
        this.displayScore == totalScore;

        //Tekstfeedback goed bezig
        if (totalScore > 35) {
          this.videoURL = "/video/GoedBezig.mp4";
          this.videoLooping = false;
          this.tekstFeedback = "Goed bezig"
          
          var vidID = document.getElementById('vidID')
          vidID.onended = () => {
          this.videoLooping = true;
          this.videoURL = "/video/dashboardLoop.mp4";
          this.tekstFeedback = "Ik ben peer"
          }
        }

        //Logs
        // console.log("contact score :" + contactTimePercentage);
        // console.log("impact score :" + impactPercentage);
        //console.log("strike type score :" + strikeTypePercentage);
        // console.log("symetrie score :" + symetriePercentage);
        // console.log("total score :" + totalScore);

        //Arrays leeggooien
        this.contactTimeArray = [];
        this.strikeTypeArray = [];
        this.impactArray = [];
      }, 6000);
    },
  },
};
</script>

<style>

.z-2{
  z-index: -2;
}

</style>
