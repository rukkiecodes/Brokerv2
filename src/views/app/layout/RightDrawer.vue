<template>
  <v-navigation-drawer
    color="transparent"
    location="right"
    width="300"
    border="0"
  >
    <template v-slot:prepend>
      <div class="pa-1">
        <v-toolbar density="compact" color="transparent">
          <v-toolbar-title class="text-body-2 font-weight-regular">
            Transactions
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn variant="text" size="small" class="text-capitalize"> See More </v-btn>
        </v-toolbar>
      </div>
    </template>
    <v-card
      flat
      :key="i"
      v-for="i in 50"
      class="mx-1 pa-2 d-flex card rounded-xl mb-1"
    >
      <v-avatar class="mr-2" size="30">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-avatar>
      <v-card-text class="pa-0 d-flex flex-column flex-wrap">
        <v-card-title class="py-0 px-0 mt-n1 text-body-2 font-weight-black"
          >Terry Ochuko</v-card-title
        >
        <v-card-text class="px-0 text-caption mt-n2 pb-0">
          Some kind of text goes here. i dont know what but put it here
        </v-card-text>
      </v-card-text>
      <v-avatar class="mr-2" size="30">
        <v-img src="@/assets/images/XTVCBTC--big.svg"></v-img>
      </v-avatar>
    </v-card>
  </v-navigation-drawer>
</template>

<style>
@import "@/assets/style/home.css";
</style>