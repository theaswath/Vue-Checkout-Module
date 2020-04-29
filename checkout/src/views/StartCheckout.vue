<template>
  <div class="StartCheckout">
    <el-row :gutter="20 " type="flex">
      <!-- Checkout Bag Begin-->
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
