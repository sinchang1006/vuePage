<template>
<header>
	<h1><router-link to="/">SCE_Vue.js_UX</router-link></h1>
	<nav>
		<ul>
			<li><router-link to="Pad">Pad_ui</router-link></li>
			<li><router-link to="UX">Ux_guide</router-link></li>
			<li><router-link to="/">Code_guide</router-link></li>
			<li><router-link to="/">Vue.js</router-link></li>
			<li><router-link to="/">All_menu</router-link></li>
		</ul>
	</nav>
	<button type="button" id="mode__button" @click="toggleTheme" :class="{ 'dark-mode': data.theme === 'dark', 'light-mode': data.theme === 'white' }">{{ buttonText }}</button>
</header>
</template>
<script setup>
import { useRoute } from 'vue-router'
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
<style lang="scss"></style>
