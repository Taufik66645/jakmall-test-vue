<template>
  <div>
    <div class="delivery-wrapper">
      <form class="delivery-detail">
        <h1>Delivery Details</h1>

        <input
          type="checkbox"
          id="dropshipCheck"
          value="dropshipCheck"
          v-model="dropshipCheck"
        />
        <label for="dropshipCheck">Send as Dropshipper</label>
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
        <p @valuehange="productCount = $event">
          {{ productCount }} Items purchased
        </p>
        <p @pricehange="productPrice = $event">
          Cost of goods : Rp. {{ productPrice }}
        </p>
        <p>Dropshipping fee : Rp. {{ dropshipCheck }}</p>
        <button @click="submit">Continue to payment</button>
      </span>
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
      dropshipPhone: "",
      productCount: "",
      productPrice: "",
      dropshipCheck: ""
    };
  },
  methods: {
    submit() {
      if (this.email === "") {
        this.$router.replace("/delivery");
        alert("cant empty");
      }
      console.log(this.email);
      console.log(this.phone);
      console.log(this.address);
      console.log(this.dropshipPhone);
      console.log(this.phone);
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
