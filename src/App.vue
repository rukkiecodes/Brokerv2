<template>
  <router-view />
  <!-- grepper set vuetify3 snackbar position -->
  <v-snackbar
    v-model="snackbar.snackbar.active"
    :color="snackbar.snackbar.bg"
    close-on-back
    location="top right"
    absolute
  >
    {{ snackbar.snackbar.text }}

    <template v-slot:actions>
      <v-btn
        icon
        size="small"
        variant="text"
        @click="snackbar.snackbar.active = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
  <!-- end grepper -->
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["snackbar"]),
  },
};
</script>