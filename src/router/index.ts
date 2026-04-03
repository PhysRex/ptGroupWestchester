import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
      meta: { title: 'Physical Therapy Group of Westchester' },
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../pages/TeamPage.vue'),
      meta: { title: 'Our Team — PTG of Westchester' },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../pages/ServicesPage.vue'),
      meta: { title: 'Our Services — PTG of Westchester' },
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: () => import('../pages/TestimonialsPage.vue'),
      meta: { title: 'Patient Stories — PTG of Westchester' },
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('../pages/FormsPage.vue'),
      meta: { title: 'Patient Resources — PTG of Westchester' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFound.vue'),
      meta: { title: 'Page Not Found — PTG of Westchester' },
    },
  ],
})

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || 'Physical Therapy Group of Westchester'
})

export default router
