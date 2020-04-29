<template >
  <div id="app">
    <el-container class="ht-100 alignCenter">
      <!-- Router Buttons Debug Start -->

      <!-- <router-link to="/">
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
      <br />-->
      <!-- Router Buttons Debug End -->

      <el-row type="flex" justify="start">
        <el-card shadow="always" class="bg-card">
          <el-row>
            <el-col :span="2">
              <el-button
                @click="goBack()"
                type="text"
                :style="[($store.backBtn_disable) ? {'opacity':'1', 'transition':'0.3s'} :{'opacity':'0', 'transition':'0.3s'}]  "
              >
                <i class="el-icon-back backBtn"></i>
              </el-button>
            </el-col>
            <el-col :span="20">
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
            </el-col>
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
      if (
        this.$router.currentRoute.name == "ReviewCart" ||
        this.$router.currentRoute.name == "StartCheckout"
      ) {
        this.backBtnState();
        return 0;
      } else if (this.$router.currentRoute.name == "DeliveryDetails") {
        this.backBtnState();
        return 1;
      } else if (this.$router.currentRoute.name == "PaymentDetails") {
        this.backBtnState();
        return 2;
      } else if (this.$router.currentRoute.name == "ConfirmOrder") {
        this.backBtnState();
        return 3;
      } else if (this.$router.currentRoute.name == "OrderConfirmed") {
        this.backBtnState();
        return 4;
      } else {
        this.backBtnState();
        return 0;
      }
    },
    backBtnState() {
      console.log("BTN State: " + this.$store.backBtn_disable);
      if (
        this.$router.currentRoute.name == "ReviewCart" ||
        this.$router.currentRoute.name == "StartCheckout" ||
        this.$router.currentRoute.name == "OrderConfirmed"
      ) {
        this.$store.backBtn_disable = false;
      } else {
        this.$store.backBtn_disable = true;
      }
    },
    goBack() {
      if (
        this.$router.currentRoute.name == "ReviewCart" ||
        this.$router.currentRoute.name == "StartCheckout"
      ) {
        return false;
      } else if (this.$router.currentRoute.name == "DeliveryDetails") {
        this.$router.push({ name: "ReviewCart" });
      } else if (this.$router.currentRoute.name == "PaymentDetails") {
        this.$router.push({ name: "DeliveryDetails" });
      } else if (this.$router.currentRoute.name == "ConfirmOrder") {
        this.$router.push({ name: "PaymentDetails" });
      } else if (this.$router.currentRoute.name == "OrderConfirmed") {
        this.$router.push({ name: "ConfirmOrder" });
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

.backBtn {
  font-size: 3em;
  font-weight: bolder;
  color: black;
  transition: 0.3s;
  margin-top: -10px;

  &:hover {
    color: grey;
    transition: 0.3s;
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
