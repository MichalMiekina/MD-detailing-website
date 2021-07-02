import Vue from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Rezerwacje from "./views/Rezerwacje.vue";
import Cennik from "./views/Cennik.vue";
import Oferta from "./views/Oferta.vue";
import Galeria from "./views/Galeria.vue";
import Kontakt from "./views/Kontakt.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/rezerwacje", component: Rezerwacje },
  { path: "/cennik", component: Cennik },
  { path: "/oferta", component: Oferta },
  { path: "/galeria", component: Galeria },
  { path: "/kontakt", component: Kontakt },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
