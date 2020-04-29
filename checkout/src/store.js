import Vue from "vue";

export const globalVars = Vue.observable({
  // Payment Details Variables Start
  checkoutBtn: false,

  cardValid: true,

  card_details: {
    card_number: {
      pt1: "",
      pt2: "",
      pt3: "",
      pt4: "",
    },
    name: "",
    mm: "",
    yy: "",
    cvv: "",
  },
  // Payment Details Variables End

  // Delivery Details Variables Start
  deliveryBtn: false,
  address: {
    address_line: "TEST ADDRESS",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
  delivery_type: "",
  payment_type: "",
  awb: "Will Be Generated",
  delivery_station: "",
  // Delivery Details Variables End
});
