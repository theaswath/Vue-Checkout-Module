import Vue from "vue";
import VueRouter from "vue-router";
import StartCheckout from "../views/StartCheckout.vue";
import ReviewCart from "../views/ReviewCart.vue";
import PaymentDetails from "../views/PaymentDetails.vue";
import DeliveryDetails from "../views/DeliveryDetails.vue";
import OrderConfirmed from "../views/OrderConfirmed.vue";
import ConfirmOrder from "../views/ConfirmOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ReviewCart",
    component: ReviewCart,
    children: [
      {
        path: "/",
        name: "StartCheckout",
        component: StartCheckout,
      },
      {
        path: "DeliveryDetails",
        name: "DeliveryDetails",
        component: DeliveryDetails,
      },
      {
        path: "PaymentDetails",
        name: "PaymentDetails",
        component: PaymentDetails,
      },
    ],
  },
  {
    path: "/ConfirmOrder",
    name: "ConfirmOrder",
    component: ConfirmOrder,
  },
  {
    path: "/OrderConfirmed",
    name: "OrderConfirmed",
    component: OrderConfirmed,
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
