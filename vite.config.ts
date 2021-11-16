import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // https://stackoverflow.com/a/66777245
      "@": require("path").resolve(__dirname, "src"),
    },
  },
});
