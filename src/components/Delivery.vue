<template>
  <div>
    <div class="delivery-wrapper">
      <form class="delivery-detail">
        <h1>Delivery Details</h1>
        <input
          type="checkbox"
          
          @change="check($event)"
        />

        <br />
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="input"
          placeholder="Email"
        />
        <input
          id="phone"
          v-model="phone"
          type="text"
          name="phone"
          placeholder="Phone Number"
          class="input"
        />
        <input
          id="dropshipName"
          v-model="dropshipName"
          type="text"
          name="dropshipName"
          placeholder="Dropshipper Name"
          class="input"
        />
        <input
          type="text"
          id="dropshipPhone"
          v-model="dropshipPhone"
          placeholder="Dropshipper Phone"
          class="input"
        />
        <input
          id="address"
          v-model="address"
          type="text"
          name="address"
          placeholder="Delivery Address"
          class="delivery-input"
        />
      </form>
      <hr />
      <span class="summary">
        <h1>Summary</h1>
        <p>{{ productCount }} Items purchased</p>
        <p>Cost of goods : Rp. {{ productPrice }}</p>
        <p>Dropshipping fee : Rp. {{ checked }}</p>
        <h3>Total : {{ productPrice }}</h3>
        <button @click="button" class="button">Continue to payment</button>
      </span>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./eventBus.js";

export default {
  name: "Delivery",
  data() {
    return {
      email: "",
      phone: "",
      dropshipName: "",
      address: "",
      dropshipPhone: "",
      productCount: "",
      productPrice: "",
      dropshippriceCheck: "5900",
      dropshipPrice: "",
      totalPrice: ""
    };
  },
  methods: {
    button() {
      this.$router.replace("/payment");
    }
  },
  
    check: function() {
		console.log('true')
  },
  created() {
    EventBus.$on("ChangePrice", data => {
      this.productPrice = data;
    });
  },
  updates() {
    this.totalPrice = this.productPrice + this.dropshippriceCheck;
  }
};
</script>

<style lang="stylus">
.delivery-wrapper {
  display: flex;
  height : 500 px
  padding: 5px
}
.delivery-detail {
flex: 0 0 60%;
}
.summary {
  margin-left 10px
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
.button{
  background-color: coral
  color: white
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 100px;
}
</style>
