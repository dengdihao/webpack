import Vue from 'vue'
import App from './App.vue'

import './assets/style/global.styl'
import './assets/images/876752.jpg'


const root = document.createElement('div')
document.body.appendChild(root)

console.log(process.env.NODE_ENV)

new Vue({
    render: (h) => h(App)
}).$mount(root)