<template>
  <Header></Header>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>
<script setup>
  import { useRoute } from 'vue-router'
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/views/Header.vue'
  import { computed } from 'vue'

  const route = useRoute()
  const defaultLayout = "DefaultLayout"

  const layout = computed(() => route.meta?.layout || defaultLayout)
</script>
<style scoped lang="scss"></style>
