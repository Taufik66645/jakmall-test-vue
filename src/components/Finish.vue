<template>
  <div>
    <div class="delivery-wrapper">
      <span class="delivery-detail">
        <h1 class="font">Thank you</h1>
        <hr class="line" />

        <h3>Order Id : {{ data.Orderid }}</h3>
        <p>Your order will be delivered with {{data.shipmentMethod}}</p>
        <router-link to="/" class="link"
          ><button>Go to Homepage</button></router-link
        >
      </span>
      <hr />
      <span class="summary">
        <h1 class="font">Summary</h1>
        <p>{{ data.productCount }} Items purchased</p>

        <p>Delivery Estimation {{ data.estimate }}<br /></p>
        <p>Payment Method {{ data.paymentMethod }}</p>
        <p>Cost of goods : Rp. {{ data.productPrice }}</p>
        <p>Dropshipping fee : Rp. {{ data.dropshipPrice }}</p>
        <p>
          <strong>{{ data.shipmentMethod }}</strong> shipment :
          {{ data.shipPrice }}
        </p>
        <h2 class="font">Total : {{ data.totalPrice }}</h2>
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
      data: {
        Orderid: "tfk66645",
        productCount: 0,
        productPrice: 0,
        dropshipPrice: 0,
        estimate: "",
        totalPrice: 0,
        paymentMethod: "",
        shipmentMethod: "",
        shipPrice: 0
      }
    };
  },
  methods: {},
  created() {
    EventBus.$on(
      "changePayment",
      ({
        productCount,
        productPrice,
        totalPrice,
        dropshipPrice,
        time,
        result,
        type,
        price
      }) => {
        this.data.productCount = productCount;
        this.data.productPrice = productPrice;
        this.data.totalPrice = totalPrice;
        this.data.dropshipPrice = dropshipPrice;
        this.data.paymentMethod = result;
        this.data.estimate = time;
        this.data.shipmentMethod = type;
        this.data.shipPrice = price;
      }
    );
    console.log(this.productPrice);
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
