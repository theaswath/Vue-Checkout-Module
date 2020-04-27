import Vue from "vue";
import VueRouter from "vue-router";
import ReviewCart from "../views/ReviewCart.vue";
import PaymentDetails from "../views/PaymentDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ReviewCart",
    component: ReviewCart,
  },

  {
    path: "/PaymentDetails",
    name: "PaymentDetails",
    component: PaymentDetails,
  },
  //{
  // path:
  // name:
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
