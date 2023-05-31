import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    /**
     * My Configs...
     */
    server: {
        // Set client port
        port: 3000,
        // Set proxy server
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:3001',
        //         changeOrigin: true,
        //     },
        // },
    },
})
