<template>
  <v-navigation-drawer color="transparent" border="0">
    <v-list>
      <v-list-item
        :key="i"
        v-for="(route, i) in routes"
        :to="route.to"
        active-color="transparent"
      >
        <v-list-item-title class="text-grey-darken-4 text-body-2">{{
          route.title
        }}</v-list-item-title>
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <v-icon color="grey-darken-2" size="small">{{ route.icon }}</v-icon>
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          variant="tonal"
          block
          class="text-capitalize bg-red rounded-lg"
          flat
        >
          <v-icon class="mr-2 mdi-flip-h">mdi-location-exit</v-icon>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    routes: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/app" },
      { title: "Deposit Funds", icon: "mdi-wallet" },
      { title: "Withdraw", icon: "mdi-bank-outline" },
      { title: "Transactions", icon: "mdi-chart-line" },
      { title: "Copy trader", icon: "mdi-chart-line" },
      { title: "Settings", icon: "mdi-chart-line" },
    ],
  }),
};
</script>

<style>
@import "@/assets/style/home.css";
</style>