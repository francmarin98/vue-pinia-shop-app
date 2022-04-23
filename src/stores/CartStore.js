import { groupBy } from 'lodash';
import { defineStore } from "pinia";
import { useAuthStore } from './AuthStore';


export const useCartStore = defineStore('CartStore', {
    state: () => {
        return {
            items: [],
        }
    },
    getters: {
        totalItemsOnCart: (state) => {
            return state.items.length;
        },
        isCartEmpty: (state) => state.items.length === 0,
        groupedItems: (state) => {
            const grouped = groupBy(state.items, (item) => item.name);
            const sorted = Object.keys(grouped).sort();
            let inOrder = {};
            sorted.forEach((key) => (inOrder[key] = grouped[key]));
            return inOrder;
        },
        groupCount: (state) => (name) => state.groupedItems[name].length,
        totalCart: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
    },
    actions: {
        addToCart(quantity, product) {
            quantity = parseInt(quantity);
            for (let i = 0; i < quantity; i++) {
                this.items.push({ ...product });
            }
        },
        setItemCount(product, quantity) {
            this.deleteItemsFromCart(product.name);
            this.addToCart(quantity, product);
        },
        deleteItemsFromCart(productName) {
            this.items = this.items.filter(item => item.name !== productName);
        },
        checkout() {
            const authUserStore = useAuthStore();
            alert(
                `${authUserStore.username} just bought ${this.count} items at a total of $${this.total}`
            );
        },
    }
})
