import axios from "axios";
let state = {
  posts: [],
  category: [],
  
};
let mutations = {
  POST_DATA(state, posts) {
    state.posts = posts;
  },
  POST_CATEGORY_DATA(state, category) {
    state.category = category;
  },
  // eslint-disable-next-line no-unused-vars
  POST_CREATED(state, ) {
    
  },
  // eslint-disable-next-line no-unused-vars
  POST_CATEGORY(state, ) {
    
  },
  
};
let actions = {
  PostData({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/640/posts")
        .then((result) => {
          resolve(result);
          commit("POST_DATA", result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  PostCreated({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/640/posts", data)
        .then((result) => {
          resolve(result);
          commit("POST_CREATED",);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  PostCategoryData({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:3000/category")
        .then((result) => {
          resolve(result);
          commit("POST_CATEGORY_DATA", result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  PostCategory({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/category", data)
        .then((result) => {
          resolve(result);
          commit("POST_CATEGORY",);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
let getters = {
  posts(state) {
    return state.posts;
  },
  category(state) {
    return state.category;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
