import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
server: {
  allowedHosts: ["ed746513d5b1.ngrok-free.app"],
  host: true, // pour accepter les connexions externes (ex: via ngrok)
}

})
