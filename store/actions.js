import { findAll } from '@/api/block'

export default {
  // 主题列表数据
  async getBlocks({commit}) {
    let blocks = await findAll()
    // console.log(blocks)
    commit('setBlocks', blocks)
  }
}