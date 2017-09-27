// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  data: {
    list: [{
      label: '陈二狗',
      value: 18
    }, {
      label: '李狗蛋',
      value: 32
    }, {
      label: '张全蛋',
      value: 18
    }],
    prices: [{
      name: '陈二狗',
      price: 12.857142857142858
    }, {
      name: '李狗蛋',
      price: 22.857142857142858
    }, {
      name: '张全蛋',
      price: 14.285714285714286
    }]
  },
  router,
  render: h => h(App)
}).$mount('#app-box')
