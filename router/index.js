import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../Home.vue")
  },
  {
    path: "/Lycee",
    name: "Lycee",
    component: () => import("../Lycee.vue")
  },
  {
    path: "/Bac",
    name: "Bac",
    component: () => import("../Bac.vue")
  },
  {
    path: "/Seconde",
    name: "Seconde",
    component: () => import("../Seconde.vue")
  },
  {
    path: "/BTS",
    name: "BTS",
    component: () => import("../BTS.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];
const router = new VueRouter({
  routes
});
export default router;
