<template>
  <div>
    <div class="delivery-wrapper">
      <form class="delivery-detail">
        <router-link to="/" class="font">Back to Cart</router-link>

        <h1 class="font">Delivery Details</h1>
        <hr class="line" />

        <input type="checkbox" v-on:click="activateDropship" id="dropship" />
        <label for="dropship">Send as Dropshipper</label>

        <br />
        <input
          id="email"
          v-model="delivery.email"
          type="email"
          name="email"
          class="input"
          placeholder="Email"
        />
        <input
          id="phone"
          v-model="delivery.phone"
          type="text"
          name="phone"
          placeholder="Phone Number"
          class="input"
        />
        <input
          id="dropshipName"
          v-model="delivery.dropshipName"
          type="text"
          name="dropshipName"
          placeholder="Dropshipper Name"
          class="input"
        />
        <input
          type="text"
          id="dropshipPhone"
          v-model="delivery.dropshipPhone"
          placeholder="Dropshipper Phone"
          class="input"
        />
        <input
          id="address"
          v-model="delivery.address"
          type="text"
          name="address"
          placeholder="Delivery Address"
          class="delivery-input"
          
        />
        
      </form>
      <hr />
      <span class="summary">
        <h1 class="font">Summary</h1>
        <hr />
        <p>{{ delivery.productCount }} Items purchased</p>
        <p>Cost of goods : Rp. {{ delivery.productPrice }}</p>
        <p>Dropshipping fee : Rp. {{ delivery.dropshippriceCheck }}</p>
        <h3 class="font">Total : {{ delivery.totalPrice }}</h3>
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
      delivery: {
        email: "",
        phone: "",
        dropshipName: "",
        address: "",
        dropshipPhone: "",
        productCount: 0,
        productPrice: 0,
        dropshippriceCheck: 5900,
        dropshipPrice: 0,
        totalPrice: 0
      }
    };
  },
  methods: {
    button() {
      EventBus.$emit("changeDelivery", this.delivery);
      if (this.delivery.email === "") {
        alert("fill the form");
      } else {
        this.$router.replace("/payment");
      }
    },
    activateDropship(event) {
      if (event.target.checked) {
        this.delivery.dropshipPrice = this.delivery.dropshippriceCheck;
        this.delivery.totalPrice =
          this.delivery.productPrice + this.delivery.dropshippriceCheck;
      } else {
        this.delivery.totalPrice = this.delivery.productPrice;
      }
    }
  },

  created() {
    EventBus.$on("changeOrder", ({ value, productPrice }) => {
      this.delivery.productCount = value;
      this.delivery.productPrice = productPrice;
      this.delivery.totalPrice = productPrice;
    });
  },
  back() {
    this.$router.go("/");
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
.line{
  width : 250px
  height :5 px
  background-color : 	#E0E0E0
  border : none
 margin-left: 5px
 margin-top: 5px
}
.font {
  color : coral
}
</style>
