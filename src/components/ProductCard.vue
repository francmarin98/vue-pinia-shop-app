<script setup>
// Imports
import { ref } from "vue";
import AppCountInput from "./AppCountInput.vue";

// Props
defineProps({
  product: { type: Object, required: true },
});

// Emits
defineEmits(["addToCart"]);

// Data
const count = ref(1);
</script>
<template>
  <li class="card">
    <img
      :src="`/images/${product.image}`"
      class="mb-3"
      width="300"
      :alt="product.name"
    />
    <div>
      {{ product.name }} -
      <span class="text-green-500">${{ product.price }}</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
      </div>
      <AppButton class="primary" @click="$emit('addToCart', count), (count = 1)"
        >Add to Cart</AppButton
      >
    </div>
  </li>
</template>
