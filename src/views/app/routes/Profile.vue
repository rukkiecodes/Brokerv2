<template>
  <v-container class="d-flex justify-center align-center profile">
    <v-card width="400" max-width="100%" color="transparent" flat class="card">
      <v-card-text class="d-flex justify-center align-center">
        <v-avatar color="indigo" size="100">
          <i class="las la-user-alt avatarIcon"></i>
        </v-avatar>
      </v-card-text>

      <v-card-subtitle class="font-weight-bold mb-0 pb-0"
        >Theme</v-card-subtitle
      >
      <v-card-text class="pt-0 mt-0">
        <v-switch label="Theme" hide-details />
      </v-card-text>
      <v-card-subtitle class="font-weight-bold mb-0 pb-0"
        >Profile Settings</v-card-subtitle
      >
      <v-card-text>
        <v-text-field label="Name" density="comfortable" variant="underlined" />
        <v-text-field
          label="Email"
          density="comfortable"
          variant="underlined"
        />
      </v-card-text>

      <v-card-subtitle class="font-weight-bold">Logout</v-card-subtitle>
      <v-card-text>
        <v-btn
          variant="tonal"
          block
          class="text-capitalize text-red rounded-lg"
          flat
        >
          <i class="las la-sign-out-alt icon mr-2"></i>
          Logout
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/style/home.css";
.profile {
  height: 90vh;
}
.avatarIcon {
  font-size: 2.5em;
}
</style>