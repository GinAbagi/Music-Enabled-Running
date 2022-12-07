<template>
  <div class="flex m-2 mr-1 -mb-2">
    <div class="flex-col">
      <div
        class="rounded-xl inline-block bg-white shadow-xl p-4 mt-0 mb-2 ml-2"
      >
        <div class="flex">
          <img
            src="../assets/pear.png"
            class="mr-4 object-contain h-12 w-auto"
          />
          <div class="flex-col">
            <p class="font-run">Total pears</p>
            <p id="total-pears" class="font-bold text-3xl -mb-4">
              {{ totalPearScore }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="z-10">
          <img
            class="w-full h-20 xl:w-3/4 z-20 mb-0"
            src="../../public/img/icons/inAppIcons/pearMessageFlipped.png"
          />
        </div>

        <div class="-mt-14 ml-6">
          <p class="text-2xl">Goed bezig!</p>
        </div>
      </div>
    </div>
    <img
      class="object-contain h-64 w-auto"
      src="../../public/img/icons/inAppIcons/musicPear.png"
      alt=""
    />
  </div>
</template>

<script>
import firebase from "firebase/app";
import db from "../db.js";

export default {
  name: "ProfilePearTotal",

  data() {
    return {
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