<template>
  <div>
    <div class="delivery-wrapper">
      <span class="delivery-detail">
        <h1>Shipment</h1>
        <hr class="line" />
        <div class="ship-button-group">
          <button @click="shipmentButton" class="ship-button">
            Go Send <br />{{ this.shipmentMethod.gosend.price }}
          </button>
          <button @click="shipmentButton2" class="ship-button">
            JNE <br />{{ this.shipmentMethod.jne.price }}
          </button>
          <button @click="shipmentButton3" class="ship-button">
            Personal Courier <br />{{
              this.shipmentMethod.personalCourier.price
            }}
          </button>
        </div>

        <h1>Payment</h1>
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
        <h1>Summary</h1>
        <p>{{ productCount }} Items purchased</p>
        <p>
          {{ this.shipmentMethod.result.type }} shipment :
          {{ this.shipmentMethod.result.price }}
        </p>
        <p>Delivery Estimation <br />{{ this.shipmentMethod.result.time }}</p>
        <button @click="pay" class="button">
          Pay with {{ this.paymentResult.result }}
        </button></span
      >
    </div>
  </div>
</template>

<script>
import { EventBus } from "./eventBus.js";

export default {
  name: "Order",
  data() {
    return {
      productCount: "",
      shipmentMethod: {
        gosend: {
          type: "Gosend",
          price: "15.000",
          time: "Today by Gosend"
        },
        jne: {
          type: "JNE",
          price: "9000",
          time: "2 days by JNE"
        },
        personalCourier: {
          type: "Personal Courier",
          price: "29.000",
          time: "1 day by Personal Courier"
        },
        result: {
          type: "",
          price: "",
          time: ""
        }
      },
      paymentMethod: {
        ewallet: "e - wallet",
        bankTransfer: " Bank Transfer",
        vitualAccount: "virtual Account"
      },
      paymentResult: {
        result: ""
      }
    };
  },
  methods: {
    pay() {
      this.$router.replace("/finish");
    },
    shipmentButton() {
      this.shipmentMethod.result.time = this.shipmentMethod.gosend.time;
      this.shipmentMethod.result.type = this.shipmentMethod.gosend.type;
      this.shipmentMethod.result.price = this.shipmentMethod.gosend.price;
    },
    shipmentButton2() {
      this.shipmentMethod.result.time = this.shipmentMethod.jne.time;
      this.shipmentMethod.result.type = this.shipmentMethod.jne.type;
      this.shipmentMethod.result.price = this.shipmentMethod.jne.price;
    },
    shipmentButton3() {
      this.shipmentMethod.result.time = this.shipmentMethod.personalCourier.time;
      this.shipmentMethod.result.type = this.shipmentMethod.personalCourier.type;
      this.shipmentMethod.result.price = this.shipmentMethod.personalCourier.price;
    },
    paymentButton() {
      this.paymentResult.result = this.paymentMethod.ewallet;
    },
    paymentButton2() {
      this.paymentResult.result = this.paymentMethod.bankTransfer;
    },
    paymentButton3() {
      this.paymentResult.result = this.paymentMethod.vitualAccount;
    }
  },
  created() {
    EventBus.$on("ChangeValue", data => {
      this.productCount = data;
    });
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
</style>
