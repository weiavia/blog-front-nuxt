export default {
  setSidebarShow(state, boolean) {
    state.sidebarShow = boolean
  },
  setInIndex(state, boolean) {
    state.inIndex = boolean
  },

  setComments(state, comment) {
    let comments = this.state.comments.concat([])
    comments.push(comment)
    state.comments = comments
  }
}