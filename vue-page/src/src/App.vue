<template>
  <div>
    <Header></Header>
    <component :is="layout">
      <router-view></router-view>
    </component>
    <Footer></Footer>
    <button type="button" id="mode__button" @click="toggleTheme" :class="{ 'dark-mode': data.theme === 'dark', 'light-mode': data.theme === 'white' }">{{ buttonText }}</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
import { computed, ref } from 'vue'

const route = useRoute()

// layoutSetting
const defaultLayout = "DefaultLayout"
const layout = computed(() => route.meta?.layout || defaultLayout)

// dataThememode
const data = ref({ theme: 'white' })
const buttonText = computed(() => {
  return data.value.theme === 'white' ? 'Dark Mode' : 'White Mode';
})
const toggleTheme = () => {
  data.value.theme = data.value.theme === 'white' ? 'dark' : 'white';
  document.documentElement.setAttribute('data-theme', data.value.theme);
} // dataThememode
</script>

<!-- [ImportScssSetting]
1.임폴트 Scss 셋팅시 전 페이지에 반영되어야하므로 style 태그에 scoped가 없어야함 -->
<style lang="scss">
@import "@/assets/css/component.scss";
</style>