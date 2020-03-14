<template>
  <div>
    <span class="product-card">
      <h2 class="cart">Cart</h2>
      <h3>Product 1</h3>
      <h3>Item Price : 50.000</h3>

      <h2>Quantity : {{ value }}</h2>
      <button @click="minus">-</button>
      <button @click="plus">+</button><br />
      <h3>Total Price : {{ productPrice }}</h3>

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
      value: 0,
      price: "50000",
      productPrice: 0
    };
  },
  methods: {
    minus() {
      this.value = this.value - 1;
      this.productPrice = this.price * this.value;

      if (this.value < 0) {
        this.value = 0;
        this.productPrice = 0;

        alert("cant minus");
      }
    },
    plus() {
      this.value++;

      this.productPrice = this.price * this.value;

      if (this.value > 10) {
        this.value = 10;
        alert("maximum purchasing");
        this.productPrice = 500000;
      }
    },

    submit() {
      EventBus.$emit("ChangePrice", this.productPrice);
      // EventBus.$emit("ChangePrice", this.productPrice);

      console.log(this.value);
      if (this.value >= 1) {
        this.$router.replace("/delivery");
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
