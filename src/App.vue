<template>
  <div id="app">
    <router-link to="/" class="link">Order</router-link>
    <router-link to="/delivery" class="link">Delivery</router-link>
    <router-link to="/payment" class="link">Payment</router-link>
    <router-link to="/finish" class="link">Finish</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background-color: blanchedalmond;
}
</style>
