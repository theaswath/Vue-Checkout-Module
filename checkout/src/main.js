import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { globalVars } from "./store";
import "./plugins/element.js";
import vueCountryRegionSelect from "vue-country-region-select";

Vue.config.productionTip = false;
Vue.prototype.$store = globalVars;
Vue.use(vueCountryRegionSelect);
new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
