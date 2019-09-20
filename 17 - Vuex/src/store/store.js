import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    name: 'Hello',
    counter: 0
  },
  getters: {
    doubleCounter: state => state.counter * 2,
    clickCounter: state => `${state.counter} clicks`
  },
  mutations: {
    // these mutations should be sync
    // but not async 
    increment: state => {
      state.counter++
    },
    decrement: state => {
      state.counter--;
    },
    addBy: (state, payload) => {
      state.counter += payload;
    }
  },
  actions: {
    // this is the right place to perform async operations
    incrementAsync: context => {
      setTimeout(() => {
        context.commit('increment')
      }, 2000);
    },
    decrementAsync: context => {
      setTimeout(() => {
        context.commit('decrement')
      }, 2000);
    }
  }
});