<template>
  <div class="dashBoardBackground">
    <div class="gradient"></div>
    <v-layout class="app">
      <LeftDrawer />
      <RightDrawer />
      
      <AppBarVue /> 


      <v-main class="main">
        <router-view />
      </v-main>

    </v-layout>
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

  mounted() {
    this.$nextTick(() => {
      this.getProfile();
      this.getTransactions();
      this.getChat();
      this.getAllCoppies();

      let main = document.querySelector(".main");
      main.style.height = window.innerHeight + 'px';

      window.addEventListener("resize", () => {
        main.style.height = window.innerHeight + 'px';
      });
    });
  },

  methods: {
    ...mapActions(["getProfile", "getTransactions", "getChat", "getAllCoppies"]),
  },
};
</script>

<style>
@import "../../assets/style/dashboard.css";
</style>