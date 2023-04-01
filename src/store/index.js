import { createStore } from "vuex";
import header from "./modules/header";
import why from "./modules/why";
import benefits from "./modules/benefits";
import offer from "./modules/offer";
import mentors from "./modules/mentors";
import reviews from "./modules/reviews";
import asked from "@/store/modules/asked";
import footer from "@/store/modules/footer";

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
    mentors,
    reviews,
    asked,
    footer,
  },
});
