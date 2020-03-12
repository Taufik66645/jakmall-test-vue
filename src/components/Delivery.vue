<template>
  <div>
    <div class="delivery-wrapper">
      <span class="delivery-detail">
        <h1>Delivery Details</h1>
        <input type="checkbox" /><br />
        <input type="text" placeholder="Email" class="input" v-model="this.email" @change="input"/>
        <input type="text" placeholder="Phone Number" class="input" />
        <input type="text" placeholder="Dropshipper Name" class="input"/>
        <input type="text" placeholder="Dropshipper Phone" class="input"/>
        <input type="text" placeholder="Delivery Address" class="delivery-input" />
      </span>
      <hr />
      <span class="summary">
        <h1>Summary</h1>
        <p>10 Items purchased</p>
        <button>Continue to payment</button></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery",
  data () {
    return {
      email: "",
      phone: "",
      dropshipName: "",
      address: "",
      dropshipPhone:""
    }
  },
  methods:{
    input(){
     console.log (this.email)
      
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
