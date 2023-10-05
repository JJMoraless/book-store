import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port: 5036,
    host: "192.168.129.72"
  }
})

// 192.168.129.72  5036 5040