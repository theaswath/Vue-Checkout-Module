import Vue from "vue";

export const globalVars = Vue.observable({
  checkoutBtn: false,

  cardProceed: false,

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
});
