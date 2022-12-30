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
            variant="underlined"
            placeholder="What's your name"
            prepend-inner-icon="mdi-account"
          />

          <v-text-field
            label="Email"
            variant="underlined"
            placeholder="example@mail.com"
            prepend-inner-icon="mdi-email"
          />

          <v-text-field
            label="Phone"
            variant="underlined"
            placeholder="What's your number"
            prepend-inner-icon="mdi-phone"
          />

          <v-text-field
            hide-details
            type="password"
            label="password"
            variant="underlined"
            prepend-inner-icon="mdi-lock"
            placeholder="Don't worry we are not looking"
          />

          <v-card-actions class="px-0 mt-1">
            <span class="text-caption d-flex justify-start align-center flex-wrap text-left">
              <v-checkbox density="compact" hide-details class="pa-0 ma-0 mr-1" />
              I agree to BlueZone
              <router-link to="/privacyPolicy">Privacy Policy</router-link> &
              <router-link to="/termsOfService"
                >Terms Of Service</router-link
              ></span
            >
          </v-card-actions>

          <v-card-actions class="px-0 mt-0">
            <v-btn class="bg-indigo text-capitalize" flat block :loading="false"
              >Login</v-btn
            >
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
import init from "../../assets/globe";
export default {
  mounted() {
    this.$nextTick(() => {
      init();
    });
  },
};
</script>

<style scoped>
@import "../../assets/style/Login.css";
</style>