import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/site': {
                target: 'http://static.infomania.ru/',
                changeOrigin: true,
            },
            '/media': {
                target: 'http://static.infomania.ru/site',
                changeOrigin: true,
            },
            '/news': {
                target: 'http://dev.infomania.ru/',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/entry/, ''),
            },
        },
    },
});
