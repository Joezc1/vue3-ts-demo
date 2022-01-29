import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
    history: createWebHistory('/h5'),
    routes
})

export default router
