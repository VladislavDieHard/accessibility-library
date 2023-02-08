import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/Home.vue'),
        },
        {
            path: '/documents',
            name: 'Documents',
            component: () => import('@/pages/Documents.vue'),
        },
        {
            path: '/document/:slug',
            name: 'DocumentsDetail',
            component: () => import('@/pages/DocumentsDetail.vue'),
        },
        {
            path: '/entry/:slug',
            name: 'EntryDetail',
            component: () => import('@/pages/EntryDetail.vue'),
        },
    ],
});

router.beforeEach(() => {
    window.scrollTo(0, 0);
});
