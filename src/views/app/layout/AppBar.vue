<template>
  <v-app-bar title="Application" class="appBar" color="transparent" flat>
    <!--  -->
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-chip
          v-bind="props"
          color="white"
          style="cursor: pointer"
          class="py-5 pl-2 pr-5 mr-4 card"
        >
          <v-avatar class="mr-2" color="indigo">
            <v-img v-show="profile.avatar != undefined" :src="profile.avatar" cover />
            <i
              v-show="profile.avatar == undefined"
              class="las la-user-alt icon"
            ></i>
          </v-avatar>
          <span class="font-weight-bold text-body-2 text-grey-darken-3">{{
            profile.name
          }}</span>
        </v-chip>
      </template>

      <v-card
        min-width="300"
        max-width="100%"
        flat
        class="rounded-xl card"
        color="transparent"
        elevation="4"
      >
        <v-list class="card" color="transparent">
          <v-list-item :title="profile.name"> </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-text>
          <v-btn block flat class="text-indigo rounded-lg text-capitalize"
            >Edit Profile</v-btn
          >
          <v-btn
            @click="logoutUser"
            block
            flat
            class="mt-4 text-red rounded-lg text-capitalize"
          >
            <i class="las la-sign-out-alt icon mr-2"></i>
            Logout
          </v-btn>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    menu: false,
  }),

  methods: {
    ...mapActions(["logoutUser"]),
  },

  computed: {
    ...mapState(["profile"]),
  },
};
</script>

<style scoped>
@import "@/assets/style/home.css";
</style>