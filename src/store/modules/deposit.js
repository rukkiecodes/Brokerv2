import { db } from "@/plugins/firebase"
import { addDoc, collection } from "firebase/firestore"

const state = {
    dialog: false,
    address: "0xe58ad656244e17c5f51c91834276f1774671a2c7",
    copyText: "Copy",
    currency: '',
    amount: 0,
    loading: false,
}

const actions = {
    async depositFund() {
        this.state.deposit.dialog = false
        this.state.deposit.loading = true
        await addDoc(collection(db, "users", localStorage.blueZoneToken, 'deposits'), {
            currency: state.currency,
            amount: state.amount,
            address: state.address,
            user: localStorage.blueZoneToken,
            state: 'pending',
        })
        this.state.deposit.loading = false
        this.state.snackbar.snackbar.active = true
        this.state.snackbar.snackbar.text = 'Deposit request sent'
        this.state.snackbar.snackbar.bg = 'green'
    }
}

export default { actions, state }