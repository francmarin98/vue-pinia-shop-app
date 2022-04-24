import { defineStore } from "pinia";

export const useAuthStore = defineStore("AuthStore", {
  state: () => {
    return {
      username: "francmarin98",
    };
  },
  actions: {
    visitTwitterProfile() {
      window.open(`https://twitter.com/${this.username}`, "_blank");
    },
  },
});
