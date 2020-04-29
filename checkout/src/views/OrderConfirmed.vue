<template>
  <div class="OrderConfirmed">
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
                    <el-col :span="3">
                      <h4>X 1</h4>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="3" style="text-align:center">
                  <h2>€89.00</h2>
                </el-col>
              </el-row>
            </el-card>
            <!-- Notebook -->
            <el-card shadow="never" style="margin: 10px 0px; width:85%;">
              <el-row>
                <el-col :span="3">
                  <img height="50px" src="../assets/img/notebook.jpg" alt />
                </el-col>
                <el-col :span="17">
                  <el-row>
                    <h3>Moleskine Classic Notebook, Hard Cover, Large (5" x 8.25") Ruled/Lined, Black, 240 Pages</h3>
                  </el-row>
                  <el-row style="padding: 5px 0px">
                    <el-col :span="3">
                      <h4>€18.82</h4>
                    </el-col>
                    <el-col :span="3">
                      <h4>X 4</h4>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="3" style="text-align:center">
                  <h2>€75.28</h2>
                </el-col>
              </el-row>
            </el-card>
            <!-- Total -->
            <hr style="width:85%; margin-top:20px:" />
            <el-card shadow="never" style="margin: 10px 0px; width:85%; border:none;">
              <el-row>
                <el-col :span="19">
                  <el-row style="padding: 5px 0px">
                    <h2>Total</h2>
                  </el-row>
                </el-col>
                <el-col :span="5">
                  <h1>€164.28</h1>
                </el-col>
              </el-row>
            </el-card>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          style="background: linear-gradient(180deg, rgba(134, 91, 48,1) 0%, rgba(134, 91, 48,1) 100%);"
          shadow="never"
          class="checkout-card"
        >
          <h2 style="margin-bottom:20px">Shipping Label</h2>

          <el-form :model="$store.card_details">
            <!-- Card Holder Name Begin -->
            <el-row style="padding: 0px !important;
  margin: 0px !important; ">
              <h4 style="margin-bottom:10px;color:white">To</h4>
            </el-row>

            <el-form-item style="margin-top:0px; border:1px solid white">
              <el-row style=" border:none; text-align:left; " type="flex" justify="start">
                <el-col :span="22">
                  <el-input v-model="$store.address.address_line" class="removebg" disabled="true"></el-input>
                </el-col>
              </el-row>
              <el-row style=" border:none; text-align:center" type="flex" justify="start">
                <el-col :span="6">
                  <el-input v-model="$store.address.city" class="removebg" disabled="true"></el-input>
                </el-col>

                <el-col :span="10">
                  <el-input v-model="$store.address.state" class="removebg" disabled="true"></el-input>
                </el-col>

                <el-col :span="5">
                  <el-input v-model="$store.address.pincode" class="removebg" disabled="true"></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <!-- Card Holder Name End -->
          </el-form>
          <el-row style="margin-top:0px">
            <h4 style="margin-bottom:10px;color:white">Delivery Station</h4>

            <el-col
              :span="4"
              style=" border:1px solid white; text-align:center; color:white; text-transform:uppercase"
            >
              <h1>{{$store.address.country[0]}}{{$store.address.country[1]}}</h1>
            </el-col>
            <el-col
              :span="4"
              style=" border:1px solid white; text-align:center; color:white; text-transform:uppercase"
            >
              <h1>{{$store.address.state[Math.floor(Math.random() * $store.address.state.length)]}}{{$store.address.city[Math.floor(Math.random() * $store.address.city.length)]}}</h1>
            </el-col>
          </el-row>
          <el-row style="margin-top:0px">
            <h4 style="margin-bottom:10px;margin-top:30px;color:white">Payment</h4>
          </el-row>
          <el-row>
            <!-- Credit Card Begining -->
            <el-card
              style="background: none; border:1px solid white; transition:0.5s ; "
              class="credit-card-print"
              shadow="never"
            >
              <el-row
                type="flex"
                justify="center"
                style="font-size: 0.6em; letter-spacing:0.1em transition:0.5s"
              >
                <el-col :offset="16" :span="6">
                  <img
                    :src="getCardType($store.card_details.card_number.pt1[0])"
                    alt
                    height="60em"
                    width="auto"
                    style="transition:0.5s"
                  />
                </el-col>
                <el-col :span="2"></el-col>
              </el-row>
              <el-row type="flex" justify="center" style="top:1em; transition:0.5s">
                <el-col :span="4">
                  <p>{{$store.card_details.card_number.pt1[0]}}XXX</p>
                </el-col>
                <el-col :span="2"></el-col>
                <el-col :span="4">
                  <p>XXXX</p>
                </el-col>
                <el-col :span="2"></el-col>
                <el-col :span="4">
                  <p>XXXX</p>
                </el-col>
                <el-col :span="2"></el-col>
                <el-col :span="4">
                  <p>XXX{{$store.card_details.card_number.pt4[3]}}</p>
                </el-col>
              </el-row>
              <el-row
                type="flex"
                justify="start"
                style="top:4em;  font-size: 0.6em; letter-spacing:0.1em; transition:0.5s"
              >
                <el-col :span="18">
                  <p>Prepaid Order</p>
                </el-col>
              </el-row>
            </el-card>
            <!-- Credit Card End -->
          </el-row>
        </el-card>
      </el-col>
      <!-- Card Details End-->
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "OrderConfirmed",
  components: {},
  data() {
    return {};
  },

  methods: {
    getCardType(card) {
      if (card == undefined) {
        this.$store.cardValid = true;
        return require("../assets/img/misc.svg");
      } else if (card == 3) {
        this.$store.cardValid = true;
        return require("../assets/img/amex.svg");
      } else if (card == 4) {
        this.$store.cardValid = true;
        return require("../assets/img/visa.svg");
      } else if (card == 5) {
        this.$store.cardValid = true;
        return require("../assets/img/mastercard.svg");
      } else if (card == 6) {
        this.$store.cardValid = true;
        return require("../assets/img/rupay.svg"); //change to discover if outside India,
      } else {
        this.$store.cardValid = false;
        return require("../assets/img/misc.svg"); //spacer using blank svg
      }
    }
  }
};
</script>

<style lang="scss">
body {
  background: rgb(243, 243, 243);
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

.credit-card-print {
  width: 35vh;
  height: 20vh;
  position: absolute;
  z-index: 30;
  top: 13%;

  // background-image: url("./assets/fonts/cardRef.webp") !important;
  // background-size: cover !important;
  font-family: OCR A Std !important;
  font-size: 1.2em;
  color: white !important;
  text-transform: uppercase;
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
