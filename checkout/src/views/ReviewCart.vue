<template>
  <div class="ReviewCart">
    <el-row :gutter="20 " type="flex">
      <!-- Checkout Bag Begin-->
      <el-col :span="16" class="items">
        <el-card shadow="never" class="items-card">
          <el-row style="margin-bottom: 20px">
            <h1>Checkout</h1>
          </el-row>
          <el-row>
            <!-- Wacom -->
            <el-card shadow="never" style="margin: 10px 0px; width:85%">
              <el-row>
                <el-col :span="3">
                  <img height="50px" src="../assets/img/wacom.png" alt />
                </el-col>
                <el-col :span="17">
                  <el-row>
                    <h3>Wacom Intuos S Bluetooth</h3>
                  </el-row>
                  <el-row style="padding: 5px 0px">
                    <el-col :span="3">
                      <h4>€89.00</h4>
                    </el-col>
                    <el-col :span="1">
                      <h4>X 1</h4>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="3" style="text-align:center">
                  <h2>€89.00</h2>
                </el-col>
              </el-row>
            </el-card>
            <!-- Wacom -->
            <el-card shadow="never" style="margin: 10px 0px; width:85%;">
              <el-row>
                <el-col :span="3">
                  <img height="50px" src="../assets/img/wacom.png" alt />
                </el-col>
                <el-col :span="17">
                  <el-row>
                    <h3>Wacom Intuos S Bluetooth</h3>
                  </el-row>
                  <el-row style="padding: 5px 0px">
                    <el-col :span="3">
                      <h4>€89.00</h4>
                    </el-col>
                    <el-col :span="1">
                      <h4>X 1</h4>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="3" style="text-align:center">
                  <h2>€89.00</h2>
                </el-col>
              </el-row>
            </el-card>
            <!-- Total -->
            <hr style="width:85%; margin-top:20px:" />
            <el-card shadow="never" style="margin: 10px 0px; width:85%; border:none;">
              <el-row>
                <el-col :span="20">
                  <el-row style="padding: 5px 0px">
                    <h2>Total</h2>
                  </el-row>
                </el-col>
                <el-col :span="3">
                  <h1>€89.00</h1>
                </el-col>
              </el-row>
            </el-card>
          </el-row>
        </el-card>
      </el-col>
      <transition name="nextStep" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ReviewCart",
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
.items-card {
  h4 {
    font-size: 15px;
    letter-spacing: 0.05em;
    font-family: Gilroy-Light;
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
