<template>
  <div class="background">
    <div class="gradient"></div>
    <div class="formContainer">
      <v-card width="400" max-width="98%" class="formCard" theme="dark" flat>
        <v-card-title>Join The BlueZone</v-card-title>
        <v-card-text>Sign Up And Explore BlueZone Finance</v-card-text>

        <v-card-text>
          <v-text-field
            label="Full name"
            :rules="nameRules"
            variant="underlined"
            placeholder="What's your name"
            prepend-inner-icon="mdi-account"
            v-model="register.credentials.name"
          />

          <v-text-field
            label="Email"
            :rules="emailRules"
            variant="underlined"
            placeholder="example@mail.com"
            prepend-inner-icon="mdi-email"
            v-model="register.credentials.email"
          />

          <v-text-field
            label="Phone"
            variant="underlined"
            prepend-inner-icon="mdi-phone"
            placeholder="What's your number"
            v-model="register.credentials.phone"
          />

          <v-text-field
            type="password"
            label="password"
            variant="underlined"
            :rules="passwordRules"
            prepend-inner-icon="mdi-lock"
            v-model="register.credentials.password"
            placeholder="Don't worry we are not looking"
          />

          <v-card-actions class="px-0">
            <span
              class="
                text-caption
                d-flex
                justify-start
                align-center
                flex-wrap
                text-left
              "
            >
              <v-checkbox
                hide-details
                v-model="register.agree"
                density="compact"
                class="pa-0 ma-0 mr-1"
              />
              I agree to BlueZone
              <router-link to="/privacyPolicy">Privacy Policy</router-link> &
              <router-link to="/termsOfService"
                >Terms Of Service</router-link
              ></span
            >
          </v-card-actions>

          <v-card-actions class="px-0 mt-0">
            <v-btn
              flat
              style="flex: 1"
              @click="registerUser"
              :loading="register.loading"
              class="bg-indigo text-capitalize"
              >Register</v-btn
            >
            <v-btn
              icon
              flat
              size="small"
              @click="googleRegister"
              :loading="register.googleLoading"
              class="bg-red text-capitalize px-0"
            >
              <v-icon color="white">mdi-google</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-actions class="px-0 mt-0">
            <v-spacer />
            <router-link to="/" class="text-decoration-none text-caption"
              >Already have an account?</router-link
            >
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import init from "../../assets/globe";
export default {
  data: () => ({
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          v
        ) ||
        "8 characters, at least one letter, one number and one special character",
    ],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Please enter a valid email address",
    ],
    nameRules: [(v) => !!v || "Name is required"],
  }),

  mounted() {
    this.$nextTick(() => {
      init();
    });
  },

  methods: {
    ...mapActions(["registerUser", "googleRegister"]),
  },

  computed: {
    ...mapState(["register"]),
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.background {
  background-color: #040d21;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.background .gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.background .gradient::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  background-color: rgba(255, 0, 0, 0.438);
  border-radius: 50%;
}
.background .gradient::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 500px;
  height: 500px;
  background-color: rgba(0, 132, 255, 0.438);
  border-radius: 50%;
}
.background::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  -webkit-backdrop-filter: blur(200px);
  backdrop-filter: blur(200px);
  z-index: 1;
}
.background .formContainer {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
  .background .formContainer {
    transform: translate(-50%, -50%);
    top: 50%;
    width: 100%;
    left: 50%;
    padding: 1em;
  }
}
.background .formContainer .formCard {
  background: transparent;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
}
.background .webgl {
  position: fixed;
  top: 0;
  right: 0;
  outline: none;
  z-index: 2;
  transform: translate(25%, 0%);
  background-color: transparent;
}
@media (max-width: 768px) {
  .background .webgl {
    transform: translate(0%, 0%);
  }
}
</style>