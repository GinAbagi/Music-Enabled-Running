<template>

  <scale-loader :loading="loading" :color="color" class="loader"></scale-loader>
 

     <img class="absolute h-48 background" src="../assets/GradientBackground.png" alt=""> 
     <div class="background h-screen">
       <div class="flex justify-end">
    <div class="inline-block mr-4 mt-4">
      <button
        type="button"
        class="focus:outline-none text-sm rounded-md right-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32.679"
          height="32.672"
          class="fill-current text-white"
          viewBox="0 0 32.679 32.672"
        >
          <g transform="translate(-1180.983 -58.664)">
            <path
              d="M1180.983,76.851V73.087a.543.543,0,0,0,.06-.1,2.026,2.026,0,0,1,1.793-1.539c.726-.1,1.453-.195,2.182-.268a.437.437,0,0,0,.426-.338c.164-.458.356-.909.56-1.351a.346.346,0,0,0-.042-.425c-.472-.589-.933-1.186-1.391-1.786a2.013,2.013,0,0,1,.173-2.8q1.009-1.02,2.03-2.029a2.014,2.014,0,0,1,2.819-.194q.9.684,1.787,1.391a.346.346,0,0,0,.425.04c.453-.207.915-.4,1.383-.57a.4.4,0,0,0,.3-.385c.077-.729.172-1.456.266-2.183a2.046,2.046,0,0,1,2.147-1.883c.978,0,1.956-.007,2.935,0a1.989,1.989,0,0,1,2,1.671c.133.8.219,1.6.315,2.4a.375.375,0,0,0,.278.366c.479.173.949.371,1.411.583a.349.349,0,0,0,.426-.046c.581-.464,1.171-.919,1.759-1.373a2.017,2.017,0,0,1,2.822.164q1.025,1.006,2.031,2.029a2.017,2.017,0,0,1,.164,2.845c-.446.582-.894,1.163-1.352,1.735a.371.371,0,0,0-.052.452c.206.442.4.892.559,1.352a.439.439,0,0,0,.433.328c.781.086,1.563.175,2.338.3a1.987,1.987,0,0,1,1.686,1.985q.016,1.53,0,3.061a1.991,1.991,0,0,1-1.681,1.991c-.775.13-1.556.222-2.337.305a.457.457,0,0,0-.446.355c-.159.449-.347.89-.548,1.322a.369.369,0,0,0,.046.452c.458.572.906,1.153,1.353,1.735a2.026,2.026,0,0,1-.182,2.869q-1,1.01-2.008,2.006a2.016,2.016,0,0,1-2.821.169q-.885-.68-1.761-1.371a.351.351,0,0,0-.425-.054c-.462.214-.933.408-1.409.587a.357.357,0,0,0-.279.33c-.06.57-.131,1.139-.207,1.708a3.188,3.188,0,0,1-.44,1.544,2.353,2.353,0,0,1-1.337.858h-3.7a.722.722,0,0,0-.115-.052,2,2,0,0,1-1.581-1.752c-.114-.746-.2-1.5-.281-2.245a.418.418,0,0,0-.315-.409c-.459-.165-.91-.355-1.353-.558a.373.373,0,0,0-.454.042q-.87.7-1.761,1.372a2.019,2.019,0,0,1-2.823-.174q-1.022-1.008-2.031-2.03a2.011,2.011,0,0,1-.171-2.82c.458-.6.93-1.189,1.38-1.795a.437.437,0,0,0,.046-.356c-.187-.5-.39-.987-.612-1.467a.482.482,0,0,0-.307-.243c-.725-.108-1.453-.193-2.182-.278a1.947,1.947,0,0,1-1.432-.736A6.427,6.427,0,0,1,1180.983,76.851Zm16.136,4.955a6.808,6.808,0,1,0-6.6-7.023A6.826,6.826,0,0,0,1197.119,81.806Z"
              transform="translate(0 0)"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>

  <div id="Profile">
    <ProfileInfo />
    <ProfilePearTotal />
    <SuggestionCarousel />
  </div>

  <NavBar />
     </div>
    
 
  
</template>

<script>
import ProfileInfo from "../components/ProfileInfo.vue";
import ProfilePearTotal from "../components/ProfilePearTotal.vue";
import NavBar from "../components/navBar.vue";
import SuggestionCarousel from "../components/SuggestionCarousel";
import "firebase/firestore";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

export default {
  name: "Profile",
  props: {
    color: {
      default: "#A7E000",
    },
  },
  components: {
    NavBar,
    ProfileInfo,
    ProfilePearTotal,
    SuggestionCarousel,
    ScaleLoader,
  },
  created() {
    this.loading = false;
  },
};
</script>

<style scoped>
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
  background: white;
}


</style>