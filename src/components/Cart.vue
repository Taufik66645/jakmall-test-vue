<template>
  <div>
    <span class="product-card">
      <h2>Cart</h2>
      <h3 class="product-name">Product 1</h3>
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
      console.log(this.count);
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
      if (this.value >= 1) {
        this.$router.replace("/delivery");

        console.log(this.value);
        console.log(this.productPrice);
      } else {
        alert("minimum quantity 1");
      }
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
