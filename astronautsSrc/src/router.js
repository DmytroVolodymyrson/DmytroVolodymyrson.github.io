import { createRouter, createWebHistory } from 'vue-router';

import AstroList from './components/astros/AstroList.vue';
import AstroPage from './pages/AstroPage.vue';
import NewAstro from './pages/NewAstro.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/astros' },
    {
      path: '/astros',
      component: AstroList
    },
    {
      path: '/astros/:id',
      props: true,
      component: AstroPage
    },
    {
      path: '/new-astro',
      component: NewAstro
    }
  ]
});

export default router;
