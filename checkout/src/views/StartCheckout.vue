<template>
  <div class="StartCheckout" type="flex" justify="end" style="margin:15em 0.5em; transition: 0.5s;">
    <el-row :gutter="24 ">
      <!-- Checkout Bag Begin-->
      <el-col :span="4"></el-col>
      <el-col :span="20">
        <router-link to="/DeliveryDetails">
          <el-button>
            <h1>
              Start Checkout
              <i class="el-icon-right"></i>
            </h1>
          </el-button>
        </router-link>
      </el-col>
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "StartCheckout",
  components: {},
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss">
body {
  background: rgb(243, 243, 243);
}
</style>
