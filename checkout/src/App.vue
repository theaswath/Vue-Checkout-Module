<template >
  <div id="app">
    <el-container class="ht-100 alignCenter">
      <!-- Router Buttons Debug Start -->

      <router-link to="/">
        <el-button>Home</el-button>
      </router-link>
      <br />
      <router-link to="/DeliveryDetails">
        <el-button>Delivery</el-button>
      </router-link>
      <br />
      <router-link to="/PaymentDetails">
        <el-button>Payment</el-button>
      </router-link>
      <br />
      <router-link to="ConfirmOrder">
        <el-button>Confim</el-button>
      </router-link>
      <br />
      <router-link to="OrderConfirmed">
        <el-button>Confimed</el-button>
      </router-link>
      <br />
      <!-- Router Buttons Debug End -->

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
              <el-step title="Delivery Details"></el-step>
              <el-step title="Payment Details"></el-step>
              <el-step title="Order Confirmation"></el-step>
            </el-steps>
          </el-row>
          <hr />

          <!-- Checkout Bag End-->
          <transition name="nextStep" mode="out-in">
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
      } else if (this.$router.currentRoute.name == "DeliveryDetails") {
        return 1;
      } else if (this.$router.currentRoute.name == "PaymentDetails") {
        return 2;
      } else if (this.$router.currentRoute.name == "ConfirmOrder") {
        return 3;
      } else if (this.$router.currentRoute.name == "OrderConfirmed") {
        return 4;
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
.bg-card {
  font-family: Gilroy-ExtraBold;
  height: 85vh;
  width: 80vw;
  padding: 20px;
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
