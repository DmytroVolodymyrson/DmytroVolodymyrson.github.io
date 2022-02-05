import { createStore } from 'vuex';
import astrosModule from './modules/astros/index.js';
const store = createStore({
  modules: {
    astros: astrosModule
  }
});

export default store;
