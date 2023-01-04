<template>
  <div class="background">
    <div class="gradient"></div>
    <div class="formContainer">
      <v-card width="400" max-width="98%" class="formCard card rounded-xl" theme="dark" flat>
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
              class="bg-indigo text-capitalize rounded-lg"
              >Register</v-btn
            >
            <!-- <v-btn
              icon
              flat
              size="small"
              @click="googleRegister"
              :loading="register.googleLoading"
              class="bg-red text-capitalize px-0"
            >
              <v-icon color="white">mdi-google</v-icon>
            </v-btn> -->
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
    ],
    emailRules: [
      (v) => !!v || "Email is required",
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
@import "./assets/login.css";
</style>