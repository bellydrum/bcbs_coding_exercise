import {createStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { getField, updateField } from 'vuex-map-fields';

export default createStore({
    state () {
        return {
            user: {
                username: '',
                email: ''
            }
        }
    },

    getters: {
        getField,
    },

    mutations: {
        updateField,
        updateUser(email) {
            state.user.email = email
        }
    },

    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
        // sessionStorage.clear(); when user logs out
    ],
})