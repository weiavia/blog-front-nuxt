import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c19afb0 = () => interopDefault(import('../pages/resume.vue' /* webpackChunkName: "pages/resume" */))
const _09416304 = () => interopDefault(import('../pages/timeline.vue' /* webpackChunkName: "pages/timeline" */))
const _bfb153a8 = () => interopDefault(import('../pages/write.vue' /* webpackChunkName: "pages/write" */))
const _cf13e29e = () => interopDefault(import('../pages/article/_id/index.vue' /* webpackChunkName: "pages/article/_id/index" */))
const _784f14c2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/resume",
    component: _6c19afb0,
    name: "resume"
  }, {
    path: "/timeline",
    component: _09416304,
    name: "timeline"
  }, {
    path: "/write",
    component: _bfb153a8,
    name: "write"
  }, {
    path: "/article/:id?",
    component: _cf13e29e,
    name: "article-id"
  }, {
    path: "/",
    component: _784f14c2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
