import {defineConfig} from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
//
export default defineConfig({
    server: {
        port: 8000,
        open: true,
    },
    plugins: [
        react(),
        // svg plugin
        svgr({include: "**/*.svg?react"}),
    ],
    resolve: {
        alias: {
            '@style': path.resolve(__dirname, './style'),
            '@store': path.resolve(__dirname, './store'),
            '@view': path.resolve(__dirname, './src/view'),
            '@component': path.resolve(__dirname, './src/component'),
        },
    },
    build: {
        rollupOptions: {
            external: ['./package/**/*'], // 忽略打包
        }
    },
})
