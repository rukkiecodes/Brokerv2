<template>
  <router-view />
  <!-- grepper set vuetify3 snackbar position -->
  <v-snackbar
    v-model="register.snackbar.active"
    :color="register.snackbar.bg"
    close-on-back
    location="top right"
    absolute
  >
    {{ register.snackbar.text }}

    <template v-slot:actions>
      <v-btn
        icon
        size="small"
        variant="text"
        @click="register.snackbar.active = false"
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
    ...mapState(["register"]),
  },
};
</script>