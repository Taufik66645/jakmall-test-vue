<template>
  <div>
    <span class="product-card">
      <h3 class="product-name">Product 1</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjZ8CnvEl02EH1mRkR-WXSLWo_AUXbbSGeICQIf4g1MW_xLED7"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        repudiandae fugit nemo, quaerat enim eligendi eos expedita aliquid!
        Quisquam quibusdam quidem consectetur aliquam nulla cum alias temporibus
        quo libero perferendis.
      </p>
      <h2>{{ value }}</h2>
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
      value: "0"
    };
  },
  methods: {
    minus() {
      this.value = this.value - 1;

      if (this.value < 0) {
        this.value = 0;

        alert("cant minus");
      }
    },
    plus() {
      this.value++;
      if (this.value > 10) {
        this.value = 10;
        alert("maximum purchasing");
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
    max-width: 1000 px
    padding: 10 px
    .product-card {
        margin: auto
        max-width: 400 px
        display: grid
        gap: 20 px
        border : solid
        border-radius : 25 px
        padding: 10 px

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
