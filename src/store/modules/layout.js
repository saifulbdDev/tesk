let state = {
    drawer: true
  }
 let mutations = {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    }
  }
 let actions = {
    TOGGLE_DRAWER({ commit }) {
      commit('toggleDrawer');
    }
  }
  let getters = {
    DRAWER_STATE(state) {
      return state.drawer;
    }
}

export default {
    namespaced: true,  
    state,
    getters,
    actions, 
    mutations
  }

