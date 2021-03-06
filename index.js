import Vue from "vue";
import App from "./App";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import router from "./router";
Vue.config.productionTip = false;
Vue.use(VueMaterial);
new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
