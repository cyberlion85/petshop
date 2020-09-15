import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form.vue';
import Main from '@/components/Main.vue';
import Product from '@/components/Product.vue';
//import EditProduct from "@/components/EditProduct";
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'iMain',
      component: Main,
      props: true,
    },
    {
      path: '/product/:id',
      name: 'id',
      component: Product,
      props: true,
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
