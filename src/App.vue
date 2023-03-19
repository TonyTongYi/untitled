<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Hello hello MXY~~~~"/>-->
  <login/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import login from "@/components/login/login.vue";
// import {Login} from "view-ui-plus";


export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
