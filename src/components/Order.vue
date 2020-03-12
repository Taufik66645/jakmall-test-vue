<template>
  <div>
    <span class="product-card">
      <h3 class="product-name">Product 1</h3>
      <h3>Item Price : 50.000</h3>

      <h2>Quantity : {{ value }}</h2>
      <h2>Total Price : {{ productPrice }}</h2>
      <button @click="minus">-</button>
      <button @click="plus">+</button><br />
      <button class="button-purchase" @click="submit">Purchase</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      value: "0",
      price: "50000",
      productPrice: "0"
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
      console.log(this.value);

      if (this.value > 10) {
        this.value = 10;
        alert("maximum purchasing");
        this.productPrice = 500000;
      }
    },
    submit() {
      console.log("submit");
    }
  }
};
</script>

<style lang="stylus">

div {
    background-color : white
    max-width: 500 px
    padding: 10 px
    .product-card {
        margin: auto
        max-width: 200 px
        display: grid

    .product-name {
        color: coral
        }
    .button-purchase {
        background-color: coral
        color: white
        }
    }
}
</style>
