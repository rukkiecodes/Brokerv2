import {
    createStore
} from 'vuex'

// MODULES
import snackbar from './modules/snackbar.js'
import register from './modules/register.js'
import login from './modules/login.js'
import profile from './modules/profile'
import getProfile from './modules/getProfile'
import updateProfile from './modules/updateProfile'

export default createStore({
    strict: false,
    modules: { snackbar, register, login, profile, getProfile, updateProfile },
})
