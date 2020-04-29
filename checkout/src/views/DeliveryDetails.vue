<template>
  <div class="deliverydetails">
    <el-row :gutter="20 " type="flex">
      <!-- Checkout Bag Begin-->
      <!-- Checkout Bag End -->
      <!-- Card Details Begin-->
      <el-col :span="6">
        <el-card
          style="background: linear-gradient(180deg, rgba(134, 91, 48,1) 0%, rgba(134, 91, 48,1) 100%);"
          shadow="always"
          class="checkout-card"
        >
          <h2>Shipping Label</h2>

          <el-form :model="$store.card_details">
            <!-- Card Holder Name Begin -->
            <el-row style="padding: 0px !important;
  margin: 0px !important; ">
              <el-form-item
                class="white-txt"
                label="Address:"
                style="padding: 0px !important;
  margin: 0px !important; margin-top:20px;"
                required="true"
              ></el-form-item>
            </el-row>
            <el-form-item style="margin-top:0px">
              <el-row style=" border:none; text-align:left; " type="flex" justify="start">
                <el-col :span="22">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    v-model="$store.address.address_line"
                    class="removebg"
                  ></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <!-- Card Holder Name End -->
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
                    v-model="$store.card_details.card_number.pt1"
                    maxlength="4"
                    placeholder="XXXX"
                    :style="[($store.card_details.card_number.pt1.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                  <el-input
                    v-model="$store.card_details.card_number.pt2"
                    maxlength="4"
                    placeholder="XXXX"
                    :style="[($store.card_details.card_number.pt2.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                  <el-input
                    v-model="$store.card_details.card_number.pt3"
                    :style="[($store.card_details.card_number.pt3.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    maxlength="4"
                    placeholder="XXXX"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="5">
                  <el-input
                    v-model="$store.card_details.card_number.pt4"
                    maxlength="4"
                    placeholder="XXXX"
                    :style="[($store.card_details.card_number.pt4.length == 4) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                    style="width: 5em !important; text-align: center;"
                  ></el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <!-- Card Number End -->

            <!-- Card Holder Name End -->
            <el-row type="flex" justify="end" style="margin:30px 0.5em; transition: 0.5s;">
              <el-button v-show="!$store.checkoutBtn" disabled>
                Complete Checkout
                <i class="el-icon-right"></i>
              </el-button>

              <el-button v-show="$store.checkoutBtn">
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
  name: "PaymentDetails",
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
    },

    cardPosition() {
      if (
        this.$store.card_details.card_number.pt1.length == 4 &&
        this.$store.card_details.card_number.pt2.length == 4 &&
        this.$store.card_details.card_number.pt3.length == 4 &&
        this.$store.card_details.card_number.pt4.length == 4 &&
        this.$store.card_details.name.length > 2 &&
        this.$store.card_details.mm.length == 2 &&
        this.$store.card_details.yy.length == 2 &&
        this.$store.card_details.mm > 0 &&
        this.$store.card_details.mm < 13 &&
        this.$store.card_details.yy > 0 &&
        this.$store.card_details.cvv.length == 3 &&
        this.$store.cardValid == true
      ) {
        this.$store.cardProceed = true;
        this.$store.checkoutBtn = true;
        return true;
      } else {
        this.$store.cardProceed = false;
        this.$store.checkoutBtn = false;
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background: rgb(243, 243, 243);
}

hr {
  opacity: 0.2;
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
