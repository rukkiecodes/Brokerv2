import { db } from "@/plugins/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const state = {
    allCopies: []
}

const getters = {
    allCopies: state => state.allCopies
}

const mutations = {
    setCopies(state, copies) {
        state.allCopies.push(copies)
    }
}

const actions = {
    getAllCoppies({ commit }) {
        this.state.copies.allCopies = []
        getDocs(query(collection(db, "copyTrades"), where('isDeleted', '==', false))).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log({
                    id: doc.id,
                    ...doc.data()
                })
                commit('setCopies', {
                    id: doc.id,
                    ...doc.data()
                })
            })
        })
    }
}

export default { state, getters, mutations, actions }