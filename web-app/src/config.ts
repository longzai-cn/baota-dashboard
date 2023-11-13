export default {
  name: "LZ·宝塔群控面板",
  copyright:
    "© 2023 上海龙仔网络科技有限公司. 本软件使用 MIT 许可协议开放源代码。",
  showMockServer: import.meta.env.VITE_SHOW_MOCK_SERVER === "true",
  showDefaultServer: import.meta.env.VITE_SHOW_DEFAULT_SERVER === "true",
  githubPages: import.meta.env.VITE_GITHUB_PAGES === "true",
  defaultServer: {
    id: "default-server",
    name: import.meta.env.VITE_DEFAULT_SERVER_NAME,
    host: import.meta.env.VITE_DEFAULT_SERVER_HOST,
    key: import.meta.env.VITE_DEFAULT_SERVER_KEY,
  },
};
