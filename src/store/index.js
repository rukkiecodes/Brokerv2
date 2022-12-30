import {
    createStore
} from 'vuex'

// MODULES
import snackbar from './modules/snackbar.js'
import register from './modules/register.js'
import login from './modules/login.js'

export default createStore({
    strict: false,
    modules: { snackbar, register, login },
})
