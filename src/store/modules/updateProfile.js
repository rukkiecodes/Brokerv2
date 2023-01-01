import { db } from "@/plugins/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import router from "@/router"

const actions = {
    lightTheme() {
        this.state.profile.theme = false

        updateDoc(doc(db, "users", localStorage.blueZoneToken), { theme: false })

        this.state.snackbar.snackbar.active = true
        this.state.snackbar.snackbar.text = 'Light theme activated'
        this.state.snackbar.snackbar.bg = 'indigo'
    },

    darkTheme() {
        this.state.profile.theme = true

        updateDoc(doc(db, "users", localStorage.blueZoneToken), { theme: true })
        this.state.snackbar.snackbar.active = true
        this.state.snackbar.snackbar.text = 'Dark theme activated'
        this.state.snackbar.snackbar.bg = 'indigo'
    },

    updateName() {
        this.state.profile.theme = true

        updateDoc(doc(db, "users", localStorage.blueZoneToken), { theme: true })
        this.state.snackbar.snackbar.active = true
        this.state.snackbar.snackbar.text = 'Dark theme activated'
        this.state.snackbar.snackbar.bg = 'indigo'
    },

    updateName() {
        updateDoc(doc(db, "users", localStorage.blueZoneToken), { name: this.state.profile.name })
        this.state.snackbar.snackbar.active = true
        this.state.snackbar.snackbar.text = 'Name updated'
        this.state.snackbar.snackbar.bg = 'indigo'
    },

    updateEmail() {
        updateDoc(doc(db, "users", localStorage.blueZoneToken), { email: this.state.profile.email })
        this.state.snackbar.snackbar.active = true
        this.state.snackbar.snackbar.text = 'Email updated'
        this.state.snackbar.snackbar.bg = 'indigo'
    },

    updatePhone() {
        updateDoc(doc(db, "users", localStorage.blueZoneToken), { phone: this.state.profile.phone })
        this.state.snackbar.snackbar.active = true
        this.state.snackbar.snackbar.text = 'Phone number updated'
        this.state.snackbar.snackbar.bg = 'indigo'
    },

    logoutUser() {
        localStorage.removeItem('blueZoneToken')
        router.push('/')
    },

    pickAvatar({ commit }, file) {
        let _file = file.target.files[0]

        if (!_file) return

        const storage = getStorage()

        const storageRef = ref(storage, `avatars/${_file.name}`)

        const uploadTask = uploadBytesResumable(storageRef, _file)

        uploadTask.on('state_changed', (snapshot) => {
        }, (error) => {
            console.log(error)
            snackbar.active = true
            snackbar.text = 'Error uploading avatar'
            snackbar.bg = 'red'
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                updateDoc(doc(db, "users", localStorage.blueZoneToken), { avatar: downloadURL })
                this.state.snackbar.snackbar.active = true
                this.state.snackbar.snackbar.text = 'Avatar updated'
                this.state.snackbar.snackbar.bg = 'green'
            })
        })
    }
}

export default { actions }