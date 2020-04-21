import Vue from 'vue';
import Vuex from 'vuex';

// nav
import nav from './nav';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      nav,
    },
    strict: debug
  })
}

export default createStore