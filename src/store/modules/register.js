import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../plugins/firebase";
import router from "../../router";

const register = {
    state: () => ({
        credentials: {
            name: '',
            email: '',
            phone: '',
            password: '',
        },
        agree: false,
        loading: false,
        googleLoading: false,
        snackbar: {
            active: false,
            text: 'Hello there',
            bg: 'indigo'
        }
    }),

    getters: {},

    mutations: {},

    actions: {
        registerUser() {
            let credentials = this.state.register.credentials
            // grepper javascript regex password validation / grepper javascript regex email validation
            let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ //8 characters, at least one letter, one number and one special character
            let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            // end grepper

            if (credentials.name == '' || !emailRegex.test(credentials.email) || credentials.phone == '' || !passwordRegex.test(credentials.password)) {
                this.state.register.snackbar.active = true
                this.state.register.snackbar.text = 'Please fill all fields'
                this.state.register.snackbar.bg = 'red'
            } else {
                if (!this.state.register.agree) {
                    this.state.register.snackbar.active = true
                    this.state.register.snackbar.text = 'You can not proceed without agreeing to the terms and conditions'
                    this.state.register.snackbar.bg = 'red'
                } else {
                    this.state.register.loading = true
                    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            console.log(user)
                            this.state.register.loading = false
                            this.state.register.snackbar.active = true
                            this.state.register.snackbar.text = 'Account created successfully'
                            this.state.register.snackbar.bg = 'green'
                            router.push({ name: 'app' })
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode, errorMessage)
                            this.state.register.loading = false
                            this.state.register.snackbar.active = true
                            this.state.register.snackbar.text = errorMessage
                            this.state.register.snackbar.bg = 'red'
                        });
                }
            }
        }
    },
}

export default register
