import { createRouter, createWebHistory } from 'vue-router';

const BASE_URL = import.meta.env.BASE_URL;
const history = createWebHistory(BASE_URL);

const router = createRouter({
  history,
  routes: [],
});

export default router;
