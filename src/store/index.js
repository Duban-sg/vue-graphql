import { createStore } from "vuex";
import state from "./states";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
