
<template >
  <div id="app">
    <el-container class="ht-100 alignCenter">
      <el-row type="flex">
        <el-card shadow="always" class="bg-card">
          <el-row>
            <el-steps
              :active="activeStepFn()"
              align-center
              finish-status="success"
              class="stepsCounter"
            >
              <el-step title="Review Cart"></el-step>
              <el-step title="Delivery & Payment Options"></el-step>
              <el-step title="Payment Details"></el-step>
              <el-step title="Order Confirmation"></el-step>
            </el-steps>
          </el-row>
          <hr />
          <router-view></router-view>
        </el-card>
      </el-row>
    </el-container>
  </div>
</template>

<script>
// import PaymentDetails from "./views/PaymentDetails.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    // PaymentDetails
  },

  methods: {
    activeStepFn() {
      if (this.$router.currentRoute.name == "PaymentDetails") {
        return 1;
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Gilroy-ExtraBold;
}
#app {
  font-family: Gilroy-ExtraBold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ht-100 {
  height: 100vh;
}

.alignCenter {
  /* display: flex; */
  align-items: center;
  justify-content: center;
}

.stepsCounter {
  margin-bottom: 20px;
}
</style>
