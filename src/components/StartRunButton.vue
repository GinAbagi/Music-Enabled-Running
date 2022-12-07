<template>
    <router-link class="
            mx-auto
            bg-gradient
            text-white
            
            rounded-3xl
            filter
            drop-shadow-lg
            text-2xl
            font-run
            p-6
          " to="/StartRun">    
      Start new run 
     </router-link>
  
  
         
</template>


<script>

export default {
    name: 'StartRunBtn',
}

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
</style>