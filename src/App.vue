<template>
  <div id="app">
    <MainHome />
  </div>
</template>

<script>
import MainHome from '@/components/MainHome.vue';

export default {
  name: 'app',
  components: {
    MainHome,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
