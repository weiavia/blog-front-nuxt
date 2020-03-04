import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a40f1880 = () => interopDefault(import('../pages/resume.vue' /* webpackChunkName: "pages/resume" */))
const _4e7f6314 = () => interopDefault(import('../pages/timeline.vue' /* webpackChunkName: "pages/timeline" */))
const _37505fc8 = () => interopDefault(import('../pages/write.vue' /* webpackChunkName: "pages/write" */))
const _c4e1bebe = () => interopDefault(import('../pages/article/_id/index.vue' /* webpackChunkName: "pages/article/_id/index" */))
const _0808ef8f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a40f1880,
    name: "resume"
  }, {
    path: "/timeline",
    component: _4e7f6314,
    name: "timeline"
  }, {
    path: "/write",
    component: _37505fc8,
    name: "write"
  }, {
    path: "/article/:id?",
    component: _c4e1bebe,
    name: "article-id"
  }, {
    path: "/",
    component: _0808ef8f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
