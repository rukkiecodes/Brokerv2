<template>
  <div class="background">
    <div class="gradient"></div>
    <div class="formContainer">
      <v-card width="400" max-width="98%" class="formCard" theme="dark" flat>
        <v-card-title>Welcome back</v-card-title>
        <v-card-text>Enter your email and password below</v-card-text>

        <v-card-text>
          <v-text-field
            type="email"
            label="Email"
            :rules="emailRules"
            variant="underlined"
            placeholder="example@mail.com"
            prepend-inner-icon="mdi-email"
            v-model="login.credentials.email"
          />

          <v-text-field
            type="password"
            label="password"
            variant="underlined"
            :rules="passwordRules"
            prepend-inner-icon="mdi-lock"
            v-model="login.credentials.password"
            placeholder="Don't worry we are not looking"
          />

          <v-card-actions class="px-0 mt-4">
            <v-btn
              flat
              style="flex: 1"
              @click="loginUser"
              :loading="login.loading"
              class="bg-indigo text-capitalize"
              >Login</v-btn
            >
            <v-btn
              icon
              flat
              size="small"
              @click="googleLogin"
              :loading="login.googleLoading"
              class="bg-red text-capitalize px-0"
            >
              <v-icon color="white">mdi-google</v-icon>
            </v-btn>
          </v-card-actions>

          <v-card-actions class="px-0 mt-0">
            <router-link
              to="/forgotPassword"
              class="text-decoration-none text-caption"
              >Forgot password?</router-link
            >
            <v-spacer />
            <router-link
              to="/register"
              class="text-decoration-none text-caption"
              >Don't have an account?</router-link
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
  }),

  mounted() {
    this.$nextTick(() => {
      init();
    });
  },

  methods: {
    ...mapActions(["loginUser", "googleLogin"]),
  },

  computed: {
    ...mapState(["login"]),
  },
};
</script>

<style scoped>
@import url('../../assets/style/login.css');
</style>