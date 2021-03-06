import axios from "axios";
import jwt_decode from "jwt-decode";
let state = {
  accessToken: localStorage.getItem("accessToken") || "",
  user: {},
};
let mutations = {
  REGISTER(state, user) {
    state.user = user;
  },
  USER(state, user) {
    state.user = user;
  },
  LOGIN(state, user) {
    state.posts = user;
  },
};
let actions = {
  Register({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/users/register", user)
        .then((result) => {
          const accessToken = result.data.accessToken;
          var decoded = jwt_decode(result.data.accessToken);
          localStorage.setItem("accessToken", accessToken);         
          localStorage.setItem("accessUser", decoded);
         
          axios.defaults.headers.common['Authorization'] = accessToken
          commit("REGISTER", result.data);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
          localStorage.removeItem("accessToken");
        });
    });
  },
  UserData({ commit }, ) {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:3000/600/users/`+1, )
        .then((result) => {
         console.log(result)

          commit("USER", result.data);
          resolve(result);
        })
        .catch((error) => {
          reject(error);
         
        });
    });
  },
  Login({ commit }, user) {
    return new Promise((resolve, reject) => {
      axios
        .post("http://localhost:3000/login", user)
        .then((result) => {
            const accessToken = result.data.accessToken;
            var decoded = jwt_decode(result.data.accessToken);
            localStorage.setItem("accessToken", accessToken);         
            localStorage.setItem("accessUser", JSON.stringify(decoded));
            axios.defaults.headers.common['Authorization'] = 'Bearer '+accessToken
           
          
          resolve(result);

          commit("LOGIN", result.data);
        })
        .catch((error) => {
        
          reject(error);
          localStorage.removeItem("accessToken");
        });
    });
  },
};
let getters = {
  user(state) {
    return state.user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
