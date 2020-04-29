<template>
  <div class="StartCheckout" style="display:flex; align-items:center;  justify:end">
    <el-row :gutter="20 ">
      <!-- Checkout Bag Begin-->
      <el-col :span="20">
        <h1>Start Checkout</h1>
      </el-col>
      <el-col :span="4">
        <h1>
          <i class="el-icon-right"></i>
        </h1>
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
