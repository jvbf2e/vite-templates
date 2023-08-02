import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

// * 导入所有router
const metaRouters = import.meta.glob('./modules/*.ts', { eager: true })

// * 处理路由表
export const routerArray: RouteRecordRaw[] = []
Object.values(metaRouters).forEach((item: any) => {
  Object.values(item).forEach((node: any) => {
    routerArray.push(...node)
  })
})

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Index',
    component: () => import('@/pages/index.vue'),
  },
  ...routerArray,
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)*',
    redirect: { name: '404' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
