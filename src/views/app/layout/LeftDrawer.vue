<template>
  <v-navigation-drawer color="transparent" border="0">
    <v-list>
      <v-list-item active-color="transparent" to="/app">
        <v-list-item-title class="text-grey-darken-4 text-body-2"
          >Dashboard</v-list-item-title
        >
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <i class="las la-chart-pie icon"></i>
          </v-avatar>
        </template>
      </v-list-item>

      <DepositFundDialog />

      <WithdrawFunds />

      <v-list-item active-color="transparent" to="/app/transactions">
        <v-list-item-title class="text-grey-darken-4 text-body-2"
          >Transactions</v-list-item-title
        >
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <i class="las la-chart-bar icon"></i>
          </v-avatar>
        </template>
      </v-list-item>

      <v-list-item active-color="transparent">
        <v-list-item-title class="text-grey-darken-4 text-body-2"
          >Copy trader</v-list-item-title
        >
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <i class="las la-chart-area icon"></i>
          </v-avatar>
        </template>
      </v-list-item>

      <v-list-item active-color="transparent">
        <v-list-item-title class="text-grey-darken-4 text-body-2"
          >Settings</v-list-item-title
        >
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <i class="las la-cog icon"></i>
          </v-avatar>
        </template>
      </v-list-item>

      <v-list-item active-color="transparent" to="app/support">
        <v-list-item-title class="text-grey-darken-4 text-body-2"
          >Support</v-list-item-title
        >
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <i class="las la-sms icon"></i>
          </v-avatar>
        </template>
      </v-list-item>

      <v-list-item active-color="transparent" to="/app/profile">
        <v-list-item-title class="text-grey-darken-4 text-body-2"
          >Profile</v-list-item-title
        >
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <i class="las la-user-alt icon"></i>
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          flat
          block
          variant="tonal"
          @click="logoutUser"
          class="text-capitalize text-red rounded-lg"
        >
          <i class="las la-sign-out-alt icon mr-2"></i>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from "vuex";
import DepositFundDialog from "./components/DepositFunds.vue";
import WithdrawFunds from "./components/WithdrawFunds.vue";
export default {
  components: {
    DepositFundDialog,
    WithdrawFunds
  },

  methods: {
    ...mapActions(["logoutUser"]),
  },
};
</script>

<style>
@import "@/assets/style/home.css";

.icon {
  font-size: 1.5em;
}
</style>