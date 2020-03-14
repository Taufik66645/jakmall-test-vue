<template>
  <div>
    <div class="delivery-wrapper">
      <span class="delivery-detail">
        <h1>Thank you</h1>
        <h3>Order Id : {{this.id}}</h3>
        <p>Your order will be delivered with GO-Send</p>
        <button>Go to Homepage</button>
      </span>
      <hr />
      <span class="summary">
        <h1>Summary</h1>
        <p>10 Items purchased</p>
        <h2>Total XXX.XXX</h2>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  data() {
    return {
      id: "66645"
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
