<template>
  <div class="dashBoardBackground">
    <div class="gradient"></div>
    <v-app class="app">
      <v-app-bar title="Application" class="appBar" color="transparent" flat>
        <v-chip class="py-6 pr-5 mr-4 profileChip" color="white">
          <v-avatar class="mr-2">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
          </v-avatar>
          <div class="d-flex flex-column">
            <span class="font-weight-light text-capitalize text-grey-darken-3"
              >Welcome back
            </span>
            <span class="font-weight-bold text-body-2 text-grey-darken-3"
              >Terry Amagboro</span
            >
          </div>
        </v-chip>
      </v-app-bar>

      <v-navigation-drawer
        color="transparent"
        class="drawer"
        border="0"
      ></v-navigation-drawer>

      <v-main class="main">
        <router-view />
      </v-main>
    </v-app>
    <canvas class="webgl"></canvas>
  </div>
</template>

<script>
import init from "../../assets/globe";
export default {
  mounted() {
    this.$nextTick(() => {
      init(300);
    });
  },
};
</script>

<style>
@import "../../assets/style/dashboard.css";
</style>