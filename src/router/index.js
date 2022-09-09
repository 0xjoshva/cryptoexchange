import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/market-overview",
    name: "MarketView",
    component: () => import("../views/MarketView.vue"),
  },
  {
    path: "/buy",
    name: "buycrypto",
    component: () => import("../views/BuyTransactionView.vue"),
  },
  {
    path: "/crypto/:id",
    name: "MarketSingleView",
    component: () => import("../views/MarketSingleView.vue"),
    props: true,
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/blog/:id",
    name: "BlogSingleView",
    component: () => import("../views/BlogSingleView.vue"),
    props: true,
  },
  {
    path: "/support",
    name: "support",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminPanelView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/AccountView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
