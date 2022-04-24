<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "./stores/ProductStore";
import { useCartStore } from "./stores/CartStore";

import TheHeader from "./components/TheHeader.vue";
import ProductCard from "./components/ProductCard.vue";

const productStore = useProductStore();
const cartStore = useCartStore();

const { products } = storeToRefs(productStore);
productStore.getProducts();
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addToCart($event, product)"
      />
    </ul>
  </div>
</template>
