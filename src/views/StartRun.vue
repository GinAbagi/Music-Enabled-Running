<template>
  <h1>
      Start a new run
  </h1>

  
  <router-link @onclick="toggleBottomBar" class="w-full justify-center inline-block text-center pt-2 pb-1" to="/DuringRun">    
      Start the run 
</router-link>



</template>

<script>


export default {
  name: 'Dashboard',
  components: {
    
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
      console.log(this.showBottomBar)
    }
  }, 
}
</script>