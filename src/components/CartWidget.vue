<script setup>
// Imports
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/CartStore";

// Components
import CartItem from "./CartItem.vue";

// Data
const active = ref(false);
const cartStore = useCartStore();
const { totalItemsOnCart, isCartEmpty, groupedItems, groupCount, totalCart } =
  storeToRefs(cartStore);
</script>

<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">{{ totalItemsOnCart }}</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div v-if="!isCartEmpty">
        <ul class="items-in-cart">
          <CartItem
            v-for="(items, name) in groupedItems"
            :key="name"
            :product="items[0]"
            :count="groupCount(name)"
            @updateCount="cartStore.setItemCount(items[0], $event)"
            @clear="cartStore.deleteItemsFromCart(name)"
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>${{ totalCart }}</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2" @click="cartStore.$reset()"
            >Clear Cart</AppButton
          >
          <AppButton class="primary" @click="cartStore.checkout()"
            >Checkout</AppButton
          >
        </div>
      </div>

      <div v-else><em>Cart is Empty</em></div>
    </AppModalOverlay>
  </div>
</template>

<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
