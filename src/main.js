import { createApp } from 'vue'
import App from './App.vue'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import "./assets/bootstrap/css/bootstrap.css"
// import "./assets/bootstrap/css/bootstrap.min.css"
import "@/assets/css/utilities.css"
import "@/assets/css/font2.css"

import "@/assets/css/bootstrap-icons.css"
import "@/assets/css/utils.css"
import "@/assets/css/font.css"
import "@/assets/css/nucleo-icons.css"
import "@/assets/css/nucleo-svg.css"
import "@/assets/js/42d5adcbca.js"
// import "./assets/css/soft-design-system-pro.min.css"
import "@/assets/css/main.css"
import "@/assets/css/main2.css"

import router from "@/router/router.js";


const app = createApp(App)
app.use(router)
app.mount('#app')


