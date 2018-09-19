import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.http.options.credentials = true;

export const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})

