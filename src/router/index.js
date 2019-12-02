import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import { BEmbed } from 'bootstrap-vue'
Vue.component('b-embed', BEmbed)
Vue.use(Router)

let router = new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},

	]
})

router.beforeEach((to, from, next) => {

	let currentUser = JSON.parse(localStorage.getItem('currentUser'));

	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if (requiresAuth && !currentUser) {
		next('/')
	} else if (!requiresAuth && currentUser) {
		next('home')
	} else {
		next()
	}

})

export default router