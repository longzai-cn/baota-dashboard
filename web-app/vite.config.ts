import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "GITHUB_PAGES" ? "/baota-dashboard/" : "",
  plugins: [react(), mockDevServerPlugin()],
  server: {
    proxy: {
      "^/api": { target: "http://example.com" },
    },
  },
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@longzai-cn/baota-api-client": path.resolve(
        __dirname,
        "../packages/baota-api-client/src"
      ),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // manualChunks 配置
        manualChunks: {
          // 将 React 相关库打包成单独的 chunk 中
          "react-vendor": ["react", "react-dom"],
          // 将组件库的代码打包
          library: ["antd"],
        },
      },
    },
  },
});
