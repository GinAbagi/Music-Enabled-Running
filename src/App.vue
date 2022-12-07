<template>
 <div>
<!--<NavBar />-->
  <router-view/>
 </div>
  
</template>

<script>

//import NavBar from './components/navBar.vue'

export default {
  name: "App",
  components: {
  //NavBar,
  },
  data(){
    return {
       showBottomBar: true
    }
  },
  mounted() {   
       
  },

  computed:{
    
    
  },
  methods:{
    toggleBottomBar () {
      this.showBottomBar = !this.showBottomBar
    }
  }, 
  created(){
    
  },
};
</script>

<style>

.background{
  background-image: url("../public/img/icons/inAppIcons/background.jpg");
  background-size: cover;
}

</style>
