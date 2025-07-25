import './assets/style/tailwind.css'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './core/router';

const app = createApp(App)
app.use(router);
app.use(createPinia())

app.mount('#app')
