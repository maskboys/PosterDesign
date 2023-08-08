import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // path模块是node.js内置的功能，但是node.js本身并不支持ts，所以需要手动安装npm install @types/node --save-dev

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/index.scss";', // 允许你在每个scss文件中注入额外的代码，可以制定一些全局的变量、混合器等
      },
    },
  },

  resolve: {
    // 配置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },

  server: {
    open: true, // 项目运行后自动打开
  },
});
