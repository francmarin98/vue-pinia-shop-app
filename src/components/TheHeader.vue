<script>
// Imports
import { mapState, mapActions } from "pinia";
import CartWidget from "./CartWidget.vue";
import { useAuthStore } from "../stores/AuthStore";

export default {
  components: {
    CartWidget,
  },
  computed: {
    //...mapState(useAuthStore, ['username'])
    ...mapState(useAuthStore, {
      user: "username",
    }),
    // ...mapState(useAuthStore, {
    //   user: (state) => `Hello, ${state.username}`,
    // }),
  },
  methods: {
    // ...mapActions(useAuthStore, ["visitTwitterProfile"]),
    ...mapActions(useAuthStore, {
      goToTwitter: "visitTwitterProfile",
    }),
  },
};
</script>

<template>
  <header
    class="flex justify-between p-6 mb-10 items-center"
    style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl text-gray-700 font-bold">The Pineapple Stand</h1>
    <div>
      <span @click="goToTwitter()">{{ user }}</span>
      <CartWidget class="inline-block" />
    </div>
  </header>
</template>
