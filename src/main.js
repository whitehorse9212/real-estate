// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from "buefy"
import '@mdi/font/css/materialdesignicons.css'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.prototype.$api = {
  'nyt_key': 'new york time api key',
  'google_key': '',
  'links': {
    'names': 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=',
    'lists': (name, key) => {
      return `https://api.nytimes.com/svc/books/v3/lists.json?list-name=${name}&api-key=${key}`
    },
    'best-sellers': 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=',
    'overview': 'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=',
    'google-isbn': 'https://www.googleapis.com/books/v1/volumes?q=isbn:',
    'google-self': 'https://www.googleapis.com/books/v1/volumes/',
    'google-search': 'https://www.googleapis.com/books/v1/volumes?q='
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
