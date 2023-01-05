<template>
  <v-container class="d-flex justify-center align-center profile">
    <v-card width="400" max-width="100%" class="dard" color="transparent" flat>
      <v-card-text class="d-flex justify-center align-center">
        <v-avatar color="indigo" size="100" @click="clickFileInput">
          <!-- <i class="las la-user-alt avatarIcon"></i> -->
          <v-img v-if="profile.avatar != undefined" :src="profile.avatar" cover />
          <i v-else class="las la-user-alt icon"></i>
        </v-avatar>
        <v-file-input @change="pickAvatar" class="d-none" ref="fileInput" />
      </v-card-text>

      <!--v-card-subtitle class="font-weight-bold mb-0 pb-0"
        >Theme</v-card-subtitle
      -->
      <!-- v-card-text class="pt-0 mt-0 d-flex">
        <!-- <v-btn-toggle v-model="profile.theme" rounded="lg"> </v-btn-toggle> -->
        <v-btn
          flat
          class="mr-1"
          style="flex: 1"
          @click="lightTheme"
          :active="profile.theme == false"
          :class="profile.theme == false ? 'bg-indigo' : 'bg-white'"
        >
          <i class="las la-sun icon"></i>
        </v-btn>

        <v-btn
          flat
          class="ml-1"
          style="flex: 1"
          @click="darkTheme"
          :active="profile.theme == true"
          :class="profile.theme == true ? 'bg-indigo' : 'bg-white'"
        >
          <i class="las la-moon icon"></i>
        </v-btn>
      </v-card-text -->
      <v-card-subtitle class="font-weight-bold mb-0 pb-0"
        >Profile Settings</v-card-subtitle
      >
      <v-card-text>
        <v-text-field
          v-model="profile.name"
          label="Name"
          density="comfortable"
          variant="outlined"
          @blur="updateName"
        />
        <v-text-field
          label="Email"
          v-model="profile.email"
          density="comfortable"
          variant="outlined"
          @blur="updateEmail"
        />
        <v-text-field
          label="Phone"
          v-model="profile.phone"
          density="comfortable"
          variant="outlined"
          @blur="updatePhone"
        />
      </v-card-text>

      <v-card-subtitle class="font-weight-bold">Logout</v-card-subtitle>
      <v-card-text>
        <v-btn
          variant="tonal"
          block
          class="text-capitalize text-red rounded-lg"
          flat
          @click="logoutUser"
        >
          <i class="las la-sign-out-alt icon mr-2"></i>
          Logout
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions([
      "lightTheme",
      "darkTheme",
      "updateName",
      "updateEmail",
      "updatePhone",
      "logoutUser",
      "pickAvatar",
    ]),

    clickFileInput() {
      this.$refs.fileInput.click();
    },
  },

  computed: {
    ...mapState(["profile", "updateProfile"]),
  },
};
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
