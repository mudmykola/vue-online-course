import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main", scrollTop: true },
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/*",
    name: "noRoute",
    component: () => import("../views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // перевірити, чи метатег scrollToTop є на поточному маршруті
  if (to.matched.some(record => record.meta.scrollToTop)) {
    // прокрутити до верху сторінки
    window.scrollTo(0, 0);
  }
  next();
});

export default router;
