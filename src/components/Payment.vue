<template>
  <div>
    <div class="delivery-wrapper">
      <span class="delivery-detail">
        <h1>Shipment</h1>
        <button>Go Send</button>
        <button>JNE</button>
        <button>Personal Courier</button>
        <hr />

        <h1>Payment</h1>
        <button>E - Wallet</button>
        <button>Bank Transfer</button>
        <button>Virtual Account</button>
      </span>
      <hr />
      <span class="summary">
        <h1>Summary</h1>
        <p>10 Items purchased</p>
        <button>Pay</button></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  data() {
    return {
      email: "",
      phone: "",
      dropshipName: "",
      address: "",
      dropshipPhone: ""
    };
  },
  methods: {
    input() {
      console.log(this.email);
    }
  }
};
</script>

<style lang="stylus">
.delivery-wrapper {
  display: flex;
  height : 500 px
}
.delivery-detail {
flex: 0 0 60%;
}
.summary {
  flex: 1;
}
.input {
  font-size: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 100px;

}
.delivery-input {
  font-size: 10px;
  padding-top: 10px;
  padding-bottom: 100px;
  padding-right: 100px;
}
</style>
