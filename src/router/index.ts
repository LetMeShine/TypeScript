import { RouteConfig } from 'vue-router';
import Layout from '@/layout/index.vue';

const constantRoutes: RouteConfig[] = [
    {
        path: '/',
        component: Layout,
    },
    {
        path: '/game',
        component: Layout,
        children: [
            {
                path: 'index',
                component: ()=>import('@/components/GreedySnake/index.vue')
            }
        ]
    },
]

export default constantRoutes;