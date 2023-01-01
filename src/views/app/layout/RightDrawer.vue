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
          <v-btn variant="text" size="small" class="text-capitalize">
            See More
          </v-btn>
        </v-toolbar>
      </div>
    </template>
    <v-card
      flat
      :key="transaction.id"
      v-for="transaction in allTransactions.slice(0, 20)"
      class="mx-1 pa-2 d-flex card rounded-xl mb-1"
    >
      <TransactionUserInfo :transaction="transaction" />
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import TransactionUserInfo from "./components/TransactionUserInfo.vue";
export default {
  components: {
    TransactionUserInfo,
  },

  computed: {
    ...mapGetters(["allTransactions"]),
  },
};
</script>

<style>
@import "@/assets/style/home.css";
</style>