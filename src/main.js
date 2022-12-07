import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './index.css'
import './assets/tailwind.css'
import router from './router'
import 'leaflet/dist/leaflet.css';
// App.component

const app = createApp(App)

// app.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));
app.use(router)
app.mount('#app')

// createApp(App).use(router).mount('#app')

