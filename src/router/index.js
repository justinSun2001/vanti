import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/predictive-quality',
      name: 'predictive-quality',
      component: () => import('../views/Solution/PredictiveQuality.vue')
    },
    {
      path: '/next-generation-visual-defect-detection',
      name: 'next-generation-visual-defect-detection',
      component: () => import('../views/Solution/NextgenerationVisualDefectDetection.vue')
    },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: () => import('../views/Case Studies/CaseStudies.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Company/AboutView.vue')
    }
  ]
})

export default router
