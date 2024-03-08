import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//layout Components
import DefaultLayout from '@/layout/DefaultLayout.vue'
import MainLayout from '@/layout/MainLayout.vue'
import SubLayout from '@/layout/SubLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("DefaultLayout", DefaultLayout)
app.component("MainLayout", MainLayout)
app.component("SubLayout", SubLayout)

app.mount('#app')
