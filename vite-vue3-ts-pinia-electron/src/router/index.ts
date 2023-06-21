import {
  type RouteRecordRaw,
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import type { App } from 'vue'

type RouterCustorm = {
  hidden?: boolean
}

export const constantRouterMap: (RouteRecordRaw | RouterCustorm)[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/load',
    name: 'Load',
    hidden: true,
    component: () => import('@/views/load/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_PATH),
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ top: 0, left: 0 }),
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
