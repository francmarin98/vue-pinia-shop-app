import {defineStore} from 'pinia'

export const useProductStore = defineStore('ProductStore', {
    state: () => {
        return {
            products: []
        }
    },
    actions: {
        async getProducts() {
            this.products = (await import('../data/products.json')).default;
            // this.products = (await axios.get('/some-api-url')).data;
        }
    }
})
