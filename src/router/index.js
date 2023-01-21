import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/Home.vue'),
        },
        {
            path: '/entry/:slug',
            name: 'Entry',
            component: () => import('@/pages/EntryDetail.vue'),
        },
    ],
});
