import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Order from "./components/Order.vue";
import Delivery from "./components/Delivery.vue";
import Payment from "./components/Payment.vue";
import Finish from "./components/Finish.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Order },
  { path: "/delivery", component: Delivery },
  { path: "/payment", component: Payment },
  { path: "/finish", component: Finish }


];

const router = new VueRouter ({
  routes,
  mode:"history"
})

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
