import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  outputPath:'build',
  proxy: {
    "/data": {
      "target": "https://jsonplaceholder.typicode.com/users",
      "changeOrigin": true,
      "pathRewrite": { "^/data": "" }
    }
  },
});
