<template>
  <!-- stop run btn & Pear commentaar BEGIN-->
  <div class="grid grid-cols-2 gap-4 w-full">
    <!--Pear-->
    <!--
    <img
      class="w-full"
      src="../../public/img/icons/inAppIcons/musicPear.png"
      alt=""
    />
-->
<video autoplay loop class="w-full z-2 pt-10" :src='videoURL'></video>
    <div class="w-full">
      
        <!--Pear commentaar -->
        <img class="w-40 absolute z-1" src="../../public/img/icons/inAppIcons/pearMessage.png">

        <p class="text-xl w-40 p-6">
           Welcome, my name is Pear
            </p>
    
      
      
        
      </div>
    </div>
  
  <!--Score div START-->
</template>

<script>


export default {
  name: "DashboardMascotteDashboard",
  data() {
    return {
      videoURL: "/video/dashboardLoop.mp4"
    };
  },
  mounted() {
   
  },
  
  computed: {},

  methods: {
    
  },

};
</script>

<style>
.z-1{
  z-index: -1;
}

.z-2{
  z-index: -2;
}

</style>
