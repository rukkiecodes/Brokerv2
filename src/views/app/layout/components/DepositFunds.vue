<template>
  <v-dialog v-model="deposit.dialog" width="400" max-width="100%">
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" active-color="transparent">
        <v-list-item-title class="text-grey-darken-4 text-body-2"
          >Deposit Funds</v-list-item-title
        >
        <template v-slot:prepend>
          <v-avatar class="rounded-lg card" rounded="0">
            <i class="las la-wallet icon"></i>
          </v-avatar>
        </template>
      </v-list-item>
    </template>

    <v-card class="rounded-xl">
      <v-card-title> Fund account </v-card-title>
      <v-card-text>
        <v-select
          density="compact"
          variant="outlined"
          v-model="deposit.currency"
          label="Choose cryptocurrency"
          :items="['Bitcoin', 'Ethereum', 'USDT', 'BNB smart chain']"
        />
        <v-text-field
          type="number"
          label="Amount"
          density="compact"
          variant="outlined"
          v-model="deposit.amount"
        />
        <div class="d-flex">
          <v-text-field
            disabled
            readonly
            density="compact"
            variant="outlined"
            v-model="deposit.address"
          />
          <v-btn
            @click="copyAddress"
            flat
            class="bg-indigo ml-4"
            :height="39"
            >{{ deposit.copyText }}</v-btn
          >
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="indigo" @click="depositFund" :loading="deposit.loading" class="text-capitalize"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["depositFund"]),

    copyAddress() {
      navigator.clipboard.writeText(this.deposit.address);
      this.deposit.copyText = "Copied";
      setTimeout(() => {
        this.deposit.copyText = "Copy";
      }, 2000);
    },
  },

  computed: {
    ...mapState(["deposit"]),
  },
};
</script>