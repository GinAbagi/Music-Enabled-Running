<template>
  <div>
    <h1 :style="{color: color}">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,  
  },
};
</script>

<style scoped>
h1 {
  /* margin-bottom: 2px; */
  margin-left: 16px;
  font-size: 22px;
  font-weight: 150;
}
div {
  display: flex;
  justify-content: left;
  align-items: stretch;
  width: 100vw;
  height: 4vh;
  
}
</style>