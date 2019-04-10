export default function ({ store, redirect, route }) {
  store.commit('setRoute', route.name)
}