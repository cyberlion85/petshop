// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/components/Form.vue';
import Main from '@/components/Main.vue';
//import Product from "@/components/Product";
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
    // {
    //     path: '/product/:id',
    //     name: 'Id',
    //     component: Product,
    //     props: true,
    //     children: [
    //       {
    //         path: 'edit',
    //         name: 'Edit',
    //         component: EditProduct,
    //         props: true
    //       }
    //     ]
    // },
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
