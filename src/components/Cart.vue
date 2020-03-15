<template>
  <div>
    <h2 class="cart">Cart</h2>
    <hr />
    <span class="product-card">
    
      <h4>Item Price : 50.000</h4>
      <h4>Quantity : {{ order.value }}</h4>
      <h4>Total Price : {{ order.productPrice }}</h4>
    <button @click="minus" class="button-purchase">-</button>
    <button @click="plus" class="button-purchase">+</button>
    <button class="button-purchase" @click="submit">Purchase</button>
    </span>
    <hr>
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
    padding: 5px
    }
    .product-card {
      display : flex
      justify-content : space-evenly
      padding 5px
    }

.button-purchase {
      background-color: coral
      color: white
      padding-top: 5px;
      padding-bottom: 5px;
      padding-right: 10px;
    }
</style>
