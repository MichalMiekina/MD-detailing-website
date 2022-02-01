import Vue from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Rezerwacje from "./views/Rezerwacje.vue";
import Cennik from "./views/Cennik.vue";
import Oferta from "./views/Oferta.vue";
import Galeria from "./views/Galeria.vue";
import Kontakt from "./views/Kontakt.vue";
import Admin from './views/Admin.vue';
import { initializeApp } from 'firebase/app';

import VueRouter from "vue-router";

const firebaseConfig = {
  apiKey: "AIzaSyC6cJfDfomCONwVTlUrZZop4C7HdYeoMXU",
  authDomain: "md-detailing-dates.firebaseapp.com",
  databaseURL: "https://md-detailing-dates-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "md-detailing-dates",
  storageBucket: "md-detailing-dates.appspot.com",
  messagingSenderId: "143908377299",
  appId: "1:143908377299:web:0244dd277053854e277a26",
  measurementId: "G-2DTYVQTDKH"
};
// Initialize Firebase
initializeApp(firebaseConfig);
// const db = getDatabase();


Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/rezerwacje", component: Rezerwacje },
  { path: "/cennik", component: Cennik },
  { path: "/oferta", component: Oferta },
  { path: "/galeria", component: Galeria },
  { path: "/kontakt", component: Kontakt },
  { path: "/admin", component: Admin }
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
