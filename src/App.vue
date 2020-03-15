<template>
  <div>
    <!-- <router-link to="/" class="link">Cart</router-link>
    <router-link to="/delivery" class="link">Delivery</router-link>
    <router-link to="/payment" class="link">Payment</router-link>
    <router-link to="/finish" class="link">Finish</router-link> -->
    <div id="app" class="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
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
.app {
  background-color: white;
  max-width: 800px;
  height: 500px;
  align-items: center;
}
.link {
  padding: 5px;
  text-decoration: none;
}
</style>
