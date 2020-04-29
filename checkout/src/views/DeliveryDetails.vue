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
                label="Address Line:"
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
            <!-- Country Start -->
            <el-row style="padding: 0px !important;
  margin: 0px !important; ">
              <el-form-item
                class="white-txt"
                label="Location (Select nearest if not exact)"
                style="padding: 0px !important;
  margin: 0px !important; "
                required="true"
              ></el-form-item>
            </el-row>
            <el-form-item style="margin-bottom:5px">
              <el-row style=" border:none; text-align:center" type="flex" justify="space-between">
                <el-col :span="10">
                  <country-select
                    v-model="$store.address.country"
                    :country="$store.address.country"
                    countryName="true"
                    style="width: 15em !important; text-align: center;"
                  ></country-select>
                </el-col>
                <el-col :span="2"></el-col>
                <el-col :span="10">
                  <region-select
                    v-model="$store.address.state"
                    :country="$store.address.country"
                    :region="$store.address.state"
                    regionName="true"
                    countryName="true"
                    style="width: 15em !important; text-align: center;"
                  ></region-select>
                </el-col>
                <el-col :span="2"></el-col>
              </el-row>
            </el-form-item>

            <!-- Country End -->
            <!-- City Pin start -->
            <el-form-item style="margin-bottom:5px">
              <el-row style=" border:none; text-align:left" type="flex" justify="space-between">
                <el-col :span="10">
                  <el-input
                    v-model="$store.address.city"
                    placeholder="City"
                    :style="[($store.address.city.length != 0) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                  ></el-input>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="8">
                  <el-input
                    v-model="$store.address.pincode"
                    placeholder="Pincode"
                    :style="[($store.address.pincode.length >2) ? {'border-bottom': '1px solid rgba(255, 255, 255, 1) !important', 'transition':'0.3s'} :  {'border-bottom': '1px solid rgba(255, 255, 255, 0.5) !important', 'transition':'0.3s'}]"
                  ></el-input>
                </el-col>
                <el-col :span="3"></el-col>
              </el-row>
            </el-form-item>
            <!-- City Pin End -->

            <!-- Button -->
            <el-row type="flex" justify="end" style="margin:15em 0.5em; transition: 0.5s;">
              <router-link to="/PaymentDetails">
                <el-button :disabled="!deliveryChecker()">
                  Proceed To Payment
                  <i class="el-icon-right"></i>
                </el-button>
              </router-link>
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
    deliveryChecker() {
      console.log(this.$store.address.country);
      console.log(this.$store.address.state);
      if (
        this.$store.address.address_line.length > 10 &&
        this.$store.address.city.length != 0 &&
        this.$store.address.pincode.length > 2 &&
        this.$store.address.country != "" &&
        this.$store.address.state != ""
      ) {
        this.$store.deliveryBtn = true;

        return true;
      } else {
        this.$store.deliveryBtn = false;

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
