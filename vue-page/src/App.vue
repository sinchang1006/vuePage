<template>
  <Header></Header>
  <router-view></router-view>
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/views/Header.vue'
</script>
<style scoped lang="scss"></style>
