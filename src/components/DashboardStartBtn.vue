<template>

<div class="flex flex-row justify-center whitespace-nowrap">
<router-link to="/BeforeRun" class="p-1">
    <p
      class="
            
            bg-gradient
            text-white
            
            
            rounded-full
            filter
            drop-shadow-lg
            text-2xl
            font-run
            text-center
            w-full
            p-2
          "
    >
      Start new run
    </p>
  </router-link>
</div>


  
</template>

<script>
export default {
  name: "DashboardStartBtn",
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
</style>