<template>
  <img
    class="absolute background"
    src="../assets/GradientBackground.png"
    alt=""
  />
  <div class="background h-screen">
     <div class="flex flex-col h-screen place-content-center">
    <p class="font-run text-3xl ml-4 text-peargrey">run options</p>
    <BeforeRunSwitch :settingText="settingText.setting1" />
    <BeforeRunSwitch :settingText="settingText.setting2" />
    <BeforeRunSwitch :settingText="settingText.setting3" />
    <BeforeRunPlaylist />
    <router-link
      class="
        mx-auto
        bg-gradient
        text-white
        px-20
        py-3
        mt-12
        rounded-3xl
        filter
        drop-shadow-lg
        text-2xl
        font-run
      "
      to="/DuringRun"
    >
      Start new run
    </router-link>
  </div>

  </div>
 
  <NavBar />
</template>

<script>
import NavBar from "../components/navBar.vue";
import BeforeRunSwitch from "../components/BeforeRunSwitch.vue";
import BeforeRunPlaylist from "../components/BeforeRunPlaylist.vue";

export default {
  name: "BeforeRun",
  components: {
    NavBar,
    BeforeRunSwitch,
    BeforeRunPlaylist,
  },
  data() {
    return {
      settingText: {
        setting1: "Enable timer",
        setting2: "Enable location tracker",
        setting3: "Enable real time feedback",
      },
    };
  },
};
</script>

<style scoped>
.bg-gradient {
  background: rgb(83, 234, 224);
  background: linear-gradient(
    113deg,
    rgba(83, 234, 224, 1) 0%,
    rgba(204, 230, 0, 1) 100%
  );
}
.bg-color{
  background-color: #F9F8F9;
}

</style>