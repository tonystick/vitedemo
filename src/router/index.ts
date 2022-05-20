import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView, meta: {} },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/grid', name: 'grid', component: () => import('@/views/GridView.vue') },
];

const router = createRouter({
  history: createWebHashHistory('/folder/#/app/'),
  routes,
});

// router.beforeEach((to, from, next) => {});

export default router;
