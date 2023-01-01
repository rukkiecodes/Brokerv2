<template>
  <div class="dashBoardBackground">
    <div class="gradient"></div>
    <v-app class="app">
      <AppBarVue />

      <LeftDrawer />

      <v-main class="main">
        <router-view />
      </v-main>

      <RightDrawer />
    </v-app>
    <canvas class="webgl"></canvas>
    <div class="globeCover"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppBarVue from "./layout/AppBar.vue";
import LeftDrawer from "./layout/LeftDrawer.vue";
import RightDrawer from "./layout/RightDrawer.vue";
export default {
  components: {
    AppBarVue,
    LeftDrawer,
    RightDrawer,
  },

  methods: {
    ...mapActions(["getProfile", "getTransactions", "getChat"]),
  },

  mounted() {
    this.$nextTick(() => {
      this.getProfile();
      this.getTransactions();
      this.getChat();
    });
  },
};
</script>

<style>
@import "../../assets/style/dashboard.css";
</style>