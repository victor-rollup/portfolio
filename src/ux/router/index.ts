import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import HomePage from '@/ui/views/home.vue';

const DEFAULT_TITLE = 'Portafolio | Víctor León - Desarrollador Frontend';

const BASE_URL = import.meta.env.BASE_URL;
const history = createWebHistory(BASE_URL);
const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    component: HomePage,
    meta: {
      title: DEFAULT_TITLE,
      description:
        'Portafolio profesional de Víctor Eduardo León Carreño, especialista en Vue 3, TypeScript y optimización de arquitectura de software.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({ history, routes });

router.afterEach((to) => {
  const title = to.meta.title as string;
  document.title = title || DEFAULT_TITLE;
});

export default router;
