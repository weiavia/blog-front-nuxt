import { homeList } from '@/api/block'
import { pageTake } from '@/config'

export default {
  // 主题列表数据
  async getBlocks({commit}, param) {
    if(!param.take) { param.take = pageTake }
    let blocks = await homeList(param)
    // console.log(blocks)
    console.log(param)
    commit('setBlocks', { blocks, changeClass: param.changeClass } )
  }
}