import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    logOut(store) {
      store.user = null;
      this.$router.push("/");
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
