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
            <i :class="route.icon" class="icon"></i>
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          variant="tonal"
          block
          class="text-capitalize text-red rounded-lg"
          flat
        >
          <i class="las la-sign-out-alt icon mr-2"></i>
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
      { title: "Dashboard", icon: "las la-chart-pie", to: "/app" },
      { title: "Deposit Funds", icon: "las la-wallet" },
      { title: "Withdraw", icon: "las la-wallet" },
      { title: "Transactions", icon: "las la-chart-bar" },
      { title: "Copy trader", icon: "las la-chart-area" },
      { title: "Settings", icon: "las la-cog" },
      { title: "Profile", icon: "las la-user-alt", to: "/app/profile" },
    ],
  }),
};
</script>

<style>
@import "@/assets/style/home.css";

.icon {
  font-size: 1.5em;
}
</style>