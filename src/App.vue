<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './views/Home.vue';
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
@import url(@/assets/css/common.css);
#app{
  width: 1920px;
  height: 3477px;
}

</style>
