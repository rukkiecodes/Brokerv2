import { auth, db } from "@/plugins/firebase"
import { doc, getDoc } from "firebase/firestore"

const state = {
    profile: {}
}

const actions = {
    getProfile({ commit }) {
        getDoc(doc(db, "users", localStorage.blueZoneToken)).then((doc) => {
            if (doc.exists()) {
                // commit('setProfile', doc.data())
                this.state.profile = { ...doc.data() }
            } else {
                console.log("No such document!")
            }
        }).catch((error) => {
            console.log("Error getting document:", error)
        })
    }
}

export default { state, actions }
