import AboutView from "@/views/AboutView.vue";
import TodosView from "@/views/TodosView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: TodosView,
    },
    {
      path: "/nosotros",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
