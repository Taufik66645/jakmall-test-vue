<template>
  <div>
    <span class="product-card">
      <h2 class="cart">Cart</h2>
      <h3>Product 1</h3>
      <h3>Item Price : 50.000</h3>

      <h2>Quantity : {{ order.value }}</h2>
      <button @click="minus">-</button>
      <button @click="plus">+</button><br />
      <h3>Total Price : {{ order.productPrice }}</h3>

      <button class="button-purchase" @click="submit">Purchase</button>
    </span>
  </div>
</template>

<script>
import { EventBus } from "./eventBus.js";

export default {
  name: "Order",
  data() {
    return {
      order: {
        value: 0,
        price: "50000",
        productPrice: 0
      }
    };
  },
  methods: {
    minus() {
      this.order.value = this.order.value - 1;
      this.order.productPrice = this.order.price * this.order.value;
      if (this.order.value < 0) {
        this.order.value = 0;
        this.order.productPrice = 0;

        alert("cant minus");
      }
    },
    plus() {
      this.order.value++;
      this.order.productPrice = this.order.price * this.order.value;
      if (this.order.value > 10) {
        this.order.value = 10;
        alert("maximum purchasing");
        this.order.productPrice = 500000;
      }
    },

    submit() {
      if (this.order.value >= 1) {
        this.$router.replace("/delivery");
        EventBus.$emit("changeOrder", this.order);
      } else {
        alert("minimum quantity 1");
      }
    }
  }
};
</script>

<style lang="stylus">
.cart{
    color: coral
    }
.button-purchase {
      background-color: coral
      color: white
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 100px;
    }
</style>
