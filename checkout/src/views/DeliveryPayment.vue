<template>
  <div class="deliverydayment">
    <el-row :gutter="20 " type="flex">
      <!-- Credit Card Begining -->
      <el-card
        style="background: linear-gradient(90deg, rgba(0, 114, 255,1) 0%, rgba(0, 92, 204,1) 100%); transition:0.5s ; "
        :style="[(cardPosition()) ? {'right': '15%'} : {'right': '50%'}]"
        class="credit-card"
        shadow="always"
      >
        <el-row
          type="flex"
          justify="center"
          style="font-size: 0.6em; letter-spacing:0.1em transition:0.5s"
        >
          <el-col :offset="16" :span="6">
            <img
              :src="getCardType(card_details.card_number.pt1[0])"
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
            <p>{{card_details.card_number.pt1}}</p>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="4">
            <p>{{card_details.card_number.pt2}}</p>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="4">
            <p>{{card_details.card_number.pt3}}</p>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="4">
            <p>{{card_details.card_number.pt4}}</p>
          </el-col>
        </el-row>
        <el-row
          type="flex"
          justify="center"
          style="top:4em;  font-size: 0.6em; letter-spacing:0.1em; transition:0.5s"
        >
          <el-col :span="1"></el-col>
          <el-col :span="18">
            <p>{{card_details.name}}</p>
          </el-col>

          <el-col :span="2"></el-col>
          <el-col :span="2">
            <p>{{card_details.mm}}</p>
          </el-col>
          <el-col :span="2">
            <p>{{card_details.yy}}</p>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </el-card>
      <!-- Credit Card End -->

      <!-- Warning Dialogue Begin -->

      <el-card class="warning" shadow="never" style="background: none; text-align:center; ">
        <i v-show="cardValid" class="el-icon-warning-outline"></i>

        <i v-show="!cardValid" class="el-icon-circle-close" style="color:red"></i>

        <h3 v-show="cardValid">
          Details
          <br />Incomplete
        </h3>

        <h3 v-show="!cardValid" style="color:red">
          Unaccepted
          <br />Card Type
        </h3>
      </el-card>
      <!-- Warning Dialogue Begin -->

      <!-- Checkout Bag Begin-->

      <!-- Card Details Begin-->
      <el-col :span="6">
        <el-card
          style="background: linear-gradient(180deg, rgba(35,47,63,1) 0%, rgba(35,47,63,1) 100%);"
          shadow="always"
          class="checkout-card"
        >
          <h2>Card Details</h2>
          <div style="height:14em"></div>
          <el-form :model="card_details">
            <!-- Card Number Begin -->
            <el-row style="padding: 0px !important;
  margin: 0px !important; ">
              <el-form-item
                class="white-txt"
                label="Card Number"
                style="padding: 0px !important;
  margin: 0px !important; "
                required="true"
              ></el-form-item>
            </el-row>
            <el-form-item style="margin-bottom:5px">
              <el-row style=" border:none; text-align:center" type="flex" justify="center">
                <el-col :span="5">
                  <el-input
                    v-model="card_details.card_number.pt1"
                    maxlength="4"
                    placeholder="XXXX"
                    :style="[(card_details.card_number.pt1.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                  <el-input
                    v-model="card_details.card_number.pt2"
                    maxlength="4"
                    placeholder="XXXX"
                    :style="[(card_details.card_number.pt2.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                  <el-input
                    v-model="card_details.card_number.pt3"
                    :style="[(card_details.card_number.pt3.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    maxlength="4"
                    placeholder="XXXX"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                  <el-input
                    v-model="card_details.card_number.pt4"
                    maxlength="4"
                    placeholder="XXXX"
                    :style="[(card_details.card_number.pt4.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <!-- Card Number End -->
            <!-- Card Holder Name Begin -->
            <el-row style="padding: 0px !important;
  margin: 0px !important; ">
              <el-form-item
                class="white-txt"
                label="Name on Card"
                style="padding: 0px !important;
  margin: 0px !important; margin-top:20px;"
                required="true"
              ></el-form-item>
            </el-row>
            <el-form-item style="margin-top:0px">
              <el-row style=" border:none; text-align:left; " type="flex" justify="start">
                <el-col :span="22">
                  <el-input
                    v-model="card_details.name"
                    maxlength="22"
                    :style="[(card_details.name.length == 0) ? {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'}]"
                  ></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <!-- Card Holder Name End -->
            <!-- Expiry, CVV Begin -->
            <el-row
              style="padding: 0px !important;
  margin: 0px !important; border:none; text-align:center"
              type="flex"
              justify="start"
            >
              <el-col :span="24">
                <el-form-item
                  class="white-txt"
                  label="Expiry"
                  style="padding: 0px !important;
  margin: 2px 0px !important; "
                  required="true"
                ></el-form-item>

                <el-form-item style="margin-bottom:1px">
                  <el-col :span="8">
                    <el-input
                      v-model="card_details.mm"
                      maxlength="2"
                      placeholder="MM"
                      :style="[(card_details.card_number.pt1.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                      style="width: 4em !important; text-align: center;"
                    ></el-input>
                  </el-col>
                  <el-col :span="8"></el-col>
                  <el-col :span="8">
                    <el-input
                      v-model="card_details.yy"
                      maxlength="2"
                      placeholder="YY"
                      :style="[(card_details.card_number.pt1.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                      style="width: 4em !important; text-align: center;"
                    ></el-input>
                  </el-col>
                  <el-col :span="1"></el-col>
                </el-form-item>
              </el-col>

              <el-col>
                <el-form-item
                  class="white-txt"
                  label="CVV"
                  style="padding: 0px !important;
  margin: 2px 0px !important; "
                  required="true"
                ></el-form-item>

                <el-form-item style="margin-bottom:1px">
                  <el-col :span="8">
                    <el-input
                      v-model="card_details.cvv"
                      maxlength="3"
                      placeholder="CVV"
                      type="password"
                      :style="[(card_details.card_number.pt1.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                      style="width: 5em !important; text-align: center;"
                    ></el-input>
                  </el-col>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- Card Holder Name End -->
            <el-row type="flex" justify="end" style="margin:30px 0.5em; transition: 0.5s;">
              <el-button v-show="!checkoutBtn" disabled>
                Complete Checkout
                <i class="el-icon-right"></i>
              </el-button>

              <el-button v-show="checkoutBtn">
                Complete Checkout
                <i class="el-icon-right"></i>
              </el-button>
            </el-row>
          </el-form>
        </el-card>
      </el-col>
      <!-- Card Details End-->
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "DeliveryPayment",
  components: {},
  data() {
    return {
      checkoutBtn: false,

      cardProceed: false,

      cardValid: true,

      card_details: {
        card_number: {
          pt1: "",
          pt2: "",
          pt3: "",
          pt4: ""
        },
        name: "",
        mm: "",
        yy: "",
        cvv: ""
      }
    };
  },

  methods: {
    getCardType(card) {
      if (card == undefined) {
        this.cardValid = true;
        return require("../assets/img/misc.svg");
      } else if (card == 3) {
        this.cardValid = true;
        return require("../assets/img/amex.svg");
      } else if (card == 4) {
        this.cardValid = true;
        return require("../assets/img/visa.svg");
      } else if (card == 5) {
        this.cardValid = true;
        return require("../assets/img/mastercard.svg");
      } else if (card == 6) {
        this.cardValid = true;
        return require("../assets/img/rupay.svg"); //change to discover if outside India,
      } else {
        this.cardValid = false;
        return require("../assets/img/misc.svg"); //spacer using blank svg
      }
    },

    cardPosition() {
      if (
        this.card_details.card_number.pt1.length == 4 &&
        this.card_details.card_number.pt2.length == 4 &&
        this.card_details.card_number.pt3.length == 4 &&
        this.card_details.card_number.pt4.length == 4 &&
        this.card_details.name.length > 2 &&
        this.card_details.mm.length == 2 &&
        this.card_details.yy.length == 2 &&
        this.card_details.mm > 0 &&
        this.card_details.mm < 13 &&
        this.card_details.yy > 0 &&
        this.card_details.cvv.length == 3 &&
        this.cardValid == true
      ) {
        this.cardProceed = true;
        this.checkoutBtn = true;
        return true;
      } else {
        this.cardProceed = false;
        this.checkoutBtn = false;
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
body {
  background: rgb(243, 243, 243);
}

hr {
  opacity: 0.2;
}

.credit-card {
  width: 35vh;
  height: 20vh;
  position: absolute;
  z-index: 30;
  top: 13%;

  box-shadow: 10px 2px 10px 0 rgba(20, 20, 20, 0.4) !important;
  border: none !important;
  // background-image: url("./assets/fonts/cardRef.webp") !important;
  // background-size: cover !important;
  font-family: OCR A Std !important;
  font-size: 1.2em;
  color: white !important;
  text-transform: uppercase;
}

.warning {
  position: absolute;
  z-index: 20;
  top: 20%;
  right: 20%;
  font-size: 1.5em;
  text-align: center;
  border: none !important;
  i {
    color: white;
  }
  h3 {
    color: white;
    font-family: Gilroy-Light;
    font-size: 0.7em;
  }
}

.bg-card {
  font-family: Gilroy-ExtraBold;
  height: 85vh;
  width: 80vw;
  padding: 20px;
}

.checkout-card {
  margin-top: 20px;
  height: 68vh;
  width: 48vh;
  z-index: 2;

  h2 {
    color: white;
  }
}

.el-form-item__label {
  color: white !important;
  letter-spacing: 0.05em;
  font-family: Gilroy-Light;
}

.el-input__inner {
  border: none !important;

  font-family: Gilroy-Light !important;
  letter-spacing: 0.1em !important;
  font-size: 1em !important;
  border-radius: 0px !important;
  background: none !important;
  // border-bottom: 1px solid rgba(255, 255, 255, 0.5) !important;
  text-transform: uppercase;
  color: white !important;
}

h1 {
  font-size: 2em;
}

.alignCenter {
  /* display: flex; */
  align-items: center;
  justify-content: center;
}
</style>
