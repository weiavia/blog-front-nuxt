export default {
  setSidebarShow(state, boolean) {
    state.sidebarShow = boolean
  },
  setInIndex(state, boolean) {
    state.inIndex = boolean
  },

  // 主题列表
  setBlocks(state, {blocks, changeClass}) {
    if(!changeClass) {
      blocks = state.blocks.concat(blocks)
    }
    state.blocks = blocks
  },

   // 评论列表
  setComments(state, comment) {
    let comments = this.state.comments.concat([])
    comments.push(comment)
    state.comments = comments
  }
}