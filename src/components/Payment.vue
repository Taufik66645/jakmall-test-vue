<template>
  <div>
    <div class="delivery-wrapper">
      <span class="delivery-detail">
        <router-link to="/delivery" class="link">Back to Delivery</router-link>
        <h1 class="font">Shipment</h1>
        <hr class="line" />
        <div class="ship-button-group">
          <button @click.once="shipmentButton" class="ship-button">
            Go Send <br />{{ payment.shipmentMethod.gosend.price }}
          </button>
          <button @click.once="shipmentButton2" class="ship-button">
            JNE <br />{{ payment.shipmentMethod.jne.price }}
          </button>
          <button @click.once="shipmentButton3" class="ship-button">
            Personal Courier <br />{{
              payment.shipmentMethod.personalCourier.price
            }}
          </button>
        </div>

        <h1 class="font">Payment</h1>
        <hr class="line" />
        <button @click="paymentButton" class="button-pay">E - Wallet</button>
        <button @click="paymentButton2" class="button-pay">
          Bank Transfer
        </button>
        <button @click="paymentButton3" class="button-pay">
          Virtual Account
        </button>
      </span>
      <hr />
      <span class="summary">
        <h1 class="font">Summary</h1>
        <p>{{ payment.productCount }} Items purchased</p>
        <p>
          {{ payment.type }} shipment :
          {{ payment.price }}
        </p>
        <p>Delivery Estimation <br />{{ payment.time }}</p>
        <p>Cost of goods : Rp. {{ payment.productPrice }}</p>
        <p>Dropshipping fee : Rp. {{ payment.dropshipPrice }}</p>
        <h3>Total : {{ payment.totalPrice }}</h3>
        <button @click="pay" class="button">
          Pay with {{ payment.result }}
        </button></span
      >
    </div>
  </div>
</template>

<script>
import { EventBus } from "./eventBus.js";

export default {
  name: "Payment",
  data() {
    return {
      payment: {
        productCount: 0,
        productPrice: 0,
        dropshipPrice: 0,
        totalPrice: 0,
        type: "",
        price: "",
        time: "",
        result: "",
        shipmentMethod: {
          gosend: {
            type: "Gosend",
            price: 15000,
            time: "Today by Gosend"
          },
          jne: {
            type: "JNE",
            price: 9000,
            time: "2 days by JNE"
          },
          personalCourier: {
            type: "Personal Courier",
            price: 29000,
            time: "1 day by Personal Courier"
          }
        },
        paymentMethod: {
          ewallet: "e - wallet",
          bankTransfer: " Bank Transfer",
          vitualAccount: "virtual Account"
        }
      }
    };
  },
  created() {
    EventBus.$on(
      "changeDelivery",
      ({ productCount, productPrice, dropshippriceCheck, totalPrice }) => {
        this.payment.productCount = productCount;
        this.payment.productPrice = productPrice;
        this.payment.totalPrice = totalPrice;
        this.payment.dropshipPrice = dropshippriceCheck;
      }
    );
  },
  methods: {
    shipmentButton() {
      this.payment.time = this.payment.shipmentMethod.gosend.time;
      this.payment.type = this.payment.shipmentMethod.gosend.type;
      this.payment.price = this.payment.shipmentMethod.gosend.price;
      this.payment.totalPrice = this.payment.totalPrice + this.payment.price;
    },
    shipmentButton2() {
      this.payment.time = this.payment.shipmentMethod.jne.time;
      this.payment.type = this.payment.shipmentMethod.jne.type;
      this.payment.price = this.payment.shipmentMethod.jne.price;
      this.payment.totalPrice = this.payment.totalPrice + this.payment.price;
    },
    shipmentButton3() {
      this.payment.time = this.payment.shipmentMethod.personalCourier.time;
      this.payment.type = this.payment.shipmentMethod.personalCourier.type;
      this.payment.price = this.payment.shipmentMethod.personalCourier.price;
      this.payment.totalPrice = this.payment.totalPrice + this.payment.price;
    },
    paymentButton() {
      this.payment.result = this.payment.paymentMethod.ewallet;
    },
    paymentButton2() {
      this.payment.result = this.payment.paymentMethod.bankTransfer;
    },
    paymentButton3() {
      this.payment.result = this.payment.paymentMethod.vitualAccount;
    },
    pay() {
      if (this.payment.type === "") {
        alert("select shipment");
      } else if (this.payment.result.result === "") {
        alert("select payment method");
      } else {
        this.$router.replace("/finish");
        EventBus.$emit("changePayment", this.payment);
      }
    }
  }
};
</script>

<style lang="stylus">
.delivery-wrapper {
  display: flex;
  height : 500 px
  padding: 5 px
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
.line{
  width : 250px
  height :5 px
  background-color : 	#E0E0E0
  border : none
 margin-left: 5px
 margin-top: 5px
}
.ship-button-group {
  margin-top: 0 px
  margin-bottom 50 px
}
.ship-button{
  height: 50px
  padding-bottom: 10px;
  padding-right: 50px;
}
.button-pay {
  height: 40px
  padding-bottom: 10px;
  padding-right: 70px;
}
.button{
  width: 300px
  margin-bottom : 10 px
}
.font {
  color: coral
}
</style>
