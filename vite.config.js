import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

//
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@style': path.resolve(__dirname, './style'),
            '@store': path.resolve(__dirname, './store'),
            '@view': path.resolve(__dirname, './src/view'),
        },
    },
})
