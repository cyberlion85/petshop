<template>
  <div>
    <my-header></my-header>
    <h1>This is the id {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" v-bind:src="product.image" />
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{ product.title }}</h1>
        <p v-html="product.description"></p>
        <p class="price">
          {{ product.price }}
        </p>
        <button @click="edit">Edit Product</button>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
  <script>
import MyHeader from './Header.vue';
import axios from 'axios';
// import { Product } from '@/interfaces';
export default {
  components: { MyHeader },
  data() {
    return {
      product: '',
    };
  },

  created() {
    // console.log(this.$route.params);
    axios.get('/products.json').then((response) => {
      this.product = response.data.products.filter((data) => data.id == this.$route.params.id)[0];
      this.product.image = '/' + this.product.image;
    });
  },
  methods: {
    edit() {
      this.$router.push({ name: 'Edit' });
    },
  },
};
</script>
