import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import infiniteScroll from 'vue-infinite-scroll'
import PostsView from './components/PostsView'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(infiniteScroll)

/* eslint-disable no-new */
let router = new VueRouter()

router.map({
  '/:subreddit': {
    name: 'sub',
    component: PostsView
  }
})

router.redirect({
  '*': '/all'
})

router.start(App, '#app')
