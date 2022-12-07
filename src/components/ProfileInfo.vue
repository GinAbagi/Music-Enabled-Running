<template>
  <div
    :userdata="userdata"
    :historyRun="historyRun"
    id="info-wrapper"
    class="m-4 mt-10 relative"
  >
    <div class="flex items-end absolute pl-8 -top-10">
      <div
        class="
          h-24
          w-24
          mr-2
          border-pearblue
          rounded-full
          overflow-hidden
          border-2
        "
      >
        <img id="profile-picture" :src="userdata.profilePicture" />
      </div>
      <div>
        <p id="username" class="font-run">
          {{ userdata.username }}
        </p>
        <p id="user-location">{{ userdata.location }}</p>
      </div>
    </div>

    <div
      class="
        flex flex-row
        rounded-xl
        bg-white
        justify-between
        shadow-xl
        p-4
        pt-20
      "
    >
      <div class="flex flex-wrap justify-around">
        <p id="total-runs-count">{{ historyRun.length }}</p>
        <p id="total-runs-text">Total runs</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <p id="total-km">{{ parseFloat(totalKM / 1000).toFixed(2) }}</p>
        <p id="total-km-text">Total km</p>
      </div>
      <div class="flex flex-wrap justify-center">
        <p id="avg-duration">
          {{ parseFloat(avgDuration / historyRun.length / 60).toFixed(0) }} Min
        </p>
        <p id="avg-duration-text">Average duration</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import db from "../db.js";

export default {
  name: "ProfileInfo",

  data() {
    return {
      userdata: [],
      historyRun: [],
      totalKM: 0,
      avgDuration: 0,
      totalPearScore: 0,
    };
  },

  beforeMount() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      const user = firebase.auth().currentUser;
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          this.userdata = doc.data();
          fetch(
            "http://trainer.awokenwell.com:8080/api/run/" + this.userdata.merUID
          )
            .then((res) => res.json())
            .then((resdata) => {
              this.historyRun = resdata;
              // console.log(this.historyRun)
              this.dataLoaded = true;
              console.log(
                "http://trainer.awokenwell.com:8080/api/run/" +
                  this.userdata.merUID
              );

              this.totalPearScore = this.historyRun[0].pears.totalPearScore;

              Object.keys(this.historyRun).forEach((key) => {
                this.totalKM += this.historyRun[key].summary.distance;
                this.avgDuration += this.historyRun[key].summary.duration;
              });
            })
            .catch((err) => console.log(err.message));
        });
    },
  },
};
</script>

<style>
</style>