// 系统原本写法
import Vue from 'vue'

// 报错解决: 通过以下方式导入Vue
// import Vue from 'vue/dist/vue.js'

import App from './App.vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 导入axios
import Axios from 'axios'


// vue-router使用
// 1、导入组件
import ContentView from './components/ContentView.vue'
import OptionView from './components/OptionView.vue'
import ArgsView from './components/ArgsView.vue'
import UserView from './components/UserView.vue'
import AxiosDemo from './components/AxiosDemo.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

// 2、定义路由
var routes = [
	{	// 设置默认指向的路径
		path: '/',	
		redirect: '/contentview',
	},
	{
		path: '/contentview',
		component: ContentView
	},
	{
		path: '/optionview',
		component: OptionView
	},
	{
		path: '/argsview',
		component: ArgsView
	},
	{
		path: '/userview',
		component: UserView
	},
	{
		path: '/axiosdemo',
		component: AxiosDemo
	},
]

// 3、创建 router 实例
var router = new VueRouter({
	routes, 
	// 选中后的类名 (默认值是router-link-active)
	linkActiveClass: 'active'
})


// 如果在其它的组件中，是无法使用 axios 命令的。但如果将 axios 改写为 Vue 的原型属性
Vue.prototype.$ajax = Axios

new Vue({
	render: h => h(App),
	// 4、创建和挂载根实例
	router
}).$mount('#app')
