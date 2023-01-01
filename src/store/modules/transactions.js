import { collection, onSnapshot } from "firebase/firestore"
import { db } from "@/plugins/firebase"

const state = {
    allTransactions: []
}

const getters = {
    allTransactions: state => state.allTransactions
}

const mutations = {
    setTransactions(state, payload) {
        state.allTransactions.push(payload)
    }
}

const actions = {
    getTransactions({ commit }) {
        const unsub = onSnapshot(collection(db, 'users', localStorage.blueZoneToken, 'transactions'),
            snapshot => {
                snapshot.docChanges().forEach(change => {
                    commit('setTransactions', {
                        id: change.doc.id,
                        ...change.doc.data()
                    })
                })
            })
        return unsub
    }
}

export default { actions, state, getters, mutations }