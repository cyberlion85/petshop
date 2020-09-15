<template>
  <div>
    <my-header :cart-item-count="cartItemCount"></my-header>
    <main>
      <div v-for="product in sortedProducts" :key="product.id">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img class="product" :src="product.image" />
            </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
            <router-link tag="h1" :to="{ name: 'id', params: { id: product.id } }">{{ product.title }}</router-link>
            <p v-html="product.description"></p>
            <p class="price">{{ product.price | formatPrice }}</p>
            <button v-if="canAddToCart(product)" class="btn btn-primary btn-lg" @click="addToCart(product)">Add to cart</button>
            <button v-else disabled="true" class="btn btn-primary btn-lg">Add to cart</button>

            <transition name="bounce" mode="out-in">
              <span v-if="product.availableInventory - cartCount(product.id) === 0" key="0" class="inventory-message"> All Out! </span>
              <span v-else-if="product.availableInventory - cartCount(product.id) < 5" key="" class="inventory-message">
                Only {{ product.availableInventory - cartCount(product.id) }} left!
              </span>
              <span v-else key="" class="inventory-message">Buy Now! </span>
            </transition>

            <div class="rating">
              <span v-for="n in 5" :key="n" :class="{ 'rating-active': checkRating(n, product) }">☆</span>
            </div>
          </div>
          <!-- end of col-md-6-->
        </div>
        <!-- end of row-->
        <hr />
      </div>
      <!-- end of v-for-->
    </main>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import MyHeader from './Header.vue';
import axios from 'axios';
import { Product } from '@/interfaces';

export default Vue.extend({
  name: 'Imain',
  components: { MyHeader },
  filters: {
    formatPrice(price: number) {
      if (price > 99999) {
        const priceString = (price / 100).toFixed(2);
        const priceArray = priceString.split('').reverse();
        let index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ',');
          index += 4;
        }
        return '$' + priceArray.reverse().join('');
      } else {
        return '$' + (price / 100).toFixed(2);
      }
    },
  },
  data() {
    return {
      products: [] as Product[],
      cart: [] as number[],
    };
  },
  computed: {
    cartItemCount(): number {
      return this.cart.length;
    },
    sortedProducts(): Product[] {
      if (this.products.length > 0) {
        const productsArray = this.products.slice(0);
        const compare = (a: Product, b: Product) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        };
        return productsArray.sort(compare);
      }
      return [];
    },
  },
  created() {
    axios.get('/products.json').then((response) => {
      this.products = response.data.products;
      console.log(this.products);
    });
  },
  methods: {
    checkRating(n: number, myProduct: Product) {
      return myProduct.rating - n >= 0;
    },
    addToCart(aProduct: Product): void {
      this.cart.push(aProduct.id);
    },
    canAddToCart(aProduct: Product): boolean {
      //return this.product.availableInventory > this.cartItemCount;
      return aProduct.availableInventory > this.cartCount(aProduct.id);
    },
    cartCount(id: number): number {
      let count = 0;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    },
  },
});
</script>
<style scoped>
.bounce-enter-active {
  animation: shake 0.72s cubic-bezier(0.37, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {
  10%,
  90% {
    color: red;
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    color: red;
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
