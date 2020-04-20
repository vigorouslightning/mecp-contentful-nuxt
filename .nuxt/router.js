import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _521a0034 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _45ec2fb8 = () => interopDefault(import('..\\pages\\_slug\\index.vue' /* webpackChunkName: "pages__slug_index" */))
const _1fcd321a = () => interopDefault(import('..\\pages\\_.vue' /* webpackChunkName: "pages__" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _521a0034,
    name: "index"
  }, {
    path: "/:slug",
    component: _45ec2fb8,
    name: "slug"
  }, {
    path: "/*",
    component: _1fcd321a,
    name: "all"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
