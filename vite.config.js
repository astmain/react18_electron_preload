import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@src': path.resolve(__dirname, './src'),
        },
    },

    server: {
        host: "0.0.0.0",
        port: 5566,
        proxy: {
            // 以 /api 开头的请求将被代理到目标服务器
            '/api': {
                target: 'http://localhost:99991', // 后端服务器地址
                changeOrigin: true, // 允许跨域
                rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径，去掉 /api 前缀
            },
        },
    },
})
