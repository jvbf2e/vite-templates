import { type App } from 'vue'
import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

type RouterCustorm = {
  hidden?: boolean
}

export const constantRouterMap: (RouteRecordRaw | RouterCustorm)[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/layout'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'),
      },
    ],
  },
  {
    path: '/load',
    name: 'Load',
    hidden: true,
    component: () => import('@/pages/load/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ top: 0, left: 0 }),
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
