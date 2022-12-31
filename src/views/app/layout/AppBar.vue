<template>
  <v-app-bar title="Application" class="appBar" color="transparent" flat>
    <v-chip class="py-5 pl-2 pr-5 mr-4 profileChip" color="white">
      <v-avatar class="mr-2">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
      </v-avatar>
      <span class="font-weight-bold text-body-2 text-grey-darken-3">{{
        profile.name
      }}</span>
    </v-chip>
  </v-app-bar>
</template>


<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(["profile"])
  },
};
</script>