import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import { setupPrimeVue } from './plugins/primevue'

const app = createApp(App)

setupPrimeVue(app)

app.mount('#app')
