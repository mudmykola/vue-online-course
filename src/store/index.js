import { createStore } from "vuex";
import header from "./modules/header";
import why from "./modules/why";
import benefits from "./modules/benefits";
import offer from "./modules/offer";
import mentors from "./modules/mentors";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    header,
    why,
    benefits,
    offer,
    mentors
  },
});
