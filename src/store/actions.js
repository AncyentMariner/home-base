import * as types from './types'

export default {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(types.INCREMENT)
    }, 200)
  },

  fetchAsync ({ commit }) {
    setTimeout(() => {
      const item = {
        id: 4,
        name: 'Test item'
      }

      commit(types.FETCH_ITEM, item)
    }, 200)
  }
}
