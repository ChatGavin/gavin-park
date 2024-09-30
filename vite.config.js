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
            '@view': path.resolve(__dirname, './src/view'),
        },
    },
})
