import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import("../views/login/index.vue")
    },
    {
        path: '/home',
        component: () => import("../views/home/index.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
