import { homeList } from '@/api/block'
import { pageTake } from '@/config'

export default {
  // 主题列表数据
  async getBlocks({commit, state}, param) {
    if(!param.take) { param.take = pageTake }
    let blocks = await homeList(param)
    if(param.isConcat) {
      blocks = blocks.concat(state.blocks)
    }
    // console.log(blocks)
    commit('setBlocks', { blocks, changeClass: param.changeClass } )
  }
}