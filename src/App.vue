<script setup>
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'
</script>
<template>
  <div id="app">
    <div id="content">
      <Navbar/>
      <router-view></router-view>
      <Footer/>
    </div>
   
  </div>
</template>

<style scoped>

</style>
