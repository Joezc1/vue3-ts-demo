import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import("@/views/login/index.vue")
    },
    {
        path: '/home',
        name: 'home',
        component: () => import("@/views/home/index.vue")
    },
    {
        path: '/user',
        name: 'user',
        component: () => import("@/views/my/index.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
