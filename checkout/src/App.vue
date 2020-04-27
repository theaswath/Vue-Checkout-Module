<template >
  <div id="app">
    <el-container class="ht-100 alignCenter">
      <router-link to="/">
        <el-button>ReviewCart</el-button>
      </router-link>
      <router-link to="/PaymentDetails">
        <el-button>PaymentDeatils</el-button>
      </router-link>
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
          <el-col :span="16" class="items">
            <el-card shadow="never" class="items-card">
              <h1>Checkout</h1>
            </el-card>
          </el-col>
          <!-- Checkout Bag End-->
          <transition name="nextStep">
            <router-view></router-view>
          </transition>
        </el-card>
      </el-row>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  components: {},

  methods: {
    activeStepFn() {
      if (this.$router.currentRoute.name == "ReviewCart") {
        return 0;
      } else if (this.$router.currentRoute.name == "DeliveryPayment") {
        return 1;
      } else if (this.$router.currentRoute.name == "PaymentDetails") {
        return 2;
      } else if (this.$router.currentRoute.name == "OrderConfirmed") {
        return 3;
      } else {
        return 0;
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

.items-card {
  border: none !important;
}

//Animations
.nextStep-enter-active {
  animation: coming 0.5s ease-in-out;
  animation-delay: 0.5s;
  opacity: 0;
}

.nextStep-leave-active {
  animation: going 0.5s ease-in-out;
  animation-delay: 0.5s;
}

@keyframes going {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
