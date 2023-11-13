import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mockDevServerPlugin()],
  server: {
    proxy: {
      '^/api': { target: 'http://example.com' }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@longzai-cn/baota-api-client": path.resolve(
        __dirname,
        "../packages/baota-api-client/src"
      ),
    },
  },
});
