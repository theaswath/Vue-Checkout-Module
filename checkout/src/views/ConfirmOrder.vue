<template>
  <div class="ConfirmOrder" type="flex" style="margin:10em 0px; transition: 0.5s;">
    <el-row
      type="flex"
      justify="center"
      style="text-align:center; display:flex; align-items:center"
    >
      <!-- Checkout Bag Begin-->

      <el-col :span="24" class="items">
        <el-card shadow="never" class="items-card">
          <el-row>
            <i class="el-icon-warning check-warning"></i>
          </el-row>
          <br />
          <el-row style="margin-bottom: 20px">
            <h1>Final Check</h1>
          </el-row>

          <el-row style="margin-bottom: 20px" type="flex" justify="center">
            <el-col :span="4">
              <router-link to="/DeliveryDetails">
                <el-button class="review-btn">Review Delivery Details</el-button>
              </router-link>
            </el-col>
            <el-col :span="4">
              <router-link to="/PaymentDetails">
                <el-button class="review-btn">Review Payment Details</el-button>
              </router-link>
            </el-col>
          </el-row>
          <el-row style="margin-bottom: 20px" type="flex" justify="center">
            <el-col :span="24">
              <el-button @click="openLoading()" style="font-size:32px">
                Confirm Order
                <i class="el-icon-right"></i>
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ConfirmOrder",
  components: {},
  data() {
    return {};
  },

  methods: {
    openLoading() {
      const loading = this.$loading({
        lock: true,
        text: "Processing",
        // spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.$router.push("/OrderConfirmed");
      }, 3000);
    }
  }
};
</script>

<style lang="scss" >
body {
  background: rgb(243, 243, 243);
}

h1 {
  font-size: 40px;
}

.check-warning {
  font-size: 60px;
  color: orange;
}

.review-btn {
  &:hover {
    border-color: #409eff !important;
    background-color: #3693f0 !important;
    color: white !important;
  }
}

//Animations
.nextStep-enter-active {
  animation: next-step 0.5s ease-out;
  animation-delay: 0.5s;
  opacity: 0;
}

.nextStep-leave-active {
  animation: prev-step 0.5s ease-out;
  animation-delay: 0.5s;
}

@keyframes next-step {
  from {
    transform: translateX(15em);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes prev-step {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-15em);
    opacity: 0;
  }
}
</style>
