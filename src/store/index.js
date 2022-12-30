import {
    createStore
} from 'vuex'

// MODULES
import register from './modules/register.js'

export default createStore({
    strict: false,
    modules: { register },
})
