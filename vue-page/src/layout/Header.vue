<template>
<header>
	<h1><router-link to="/Home">UI UX Engineer : SCE</router-link></h1>
	<nav>
		<ul>
			<li><router-link to="/Works">Works</router-link></li>
			<li><router-link to="/WebviewLab">Webview LAB</router-link></li>
			<li><router-link to="/UX" class="coming_soon">UX</router-link></li>
			<li><router-link to="/" class="coming_soon">Etc</router-link></li>
			<li><router-link to="/" class="coming_soon">Etc</router-link></li>
		</ul>
		<button type="button"><i class="icobx all_menu"></i></button>
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
  return data.value.theme === 'white' ? 'THEME DARK' : 'THEME WHITE';
})
const toggleTheme = () => {
  data.value.theme = data.value.theme === 'white' ? 'dark' : 'white';
  document.documentElement.setAttribute('data-theme', data.value.theme);
} // dataThememode
</script>
<style lang="scss"></style>
