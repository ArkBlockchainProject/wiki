import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
  },

  title: "Web 3 Helper",
  description: "一份面向所有人的 Web 3 入门知识库",
  themeConfig: {
    logo: "/books.png",
    siteTitle: "Web 3 Helper",
    i18nRouting: true,
    search: {
      provider: "local",
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "天鲲实验室", link: "/demo" },
      { text: "与我们联系", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "欢迎",
        items: [
          { text: "新征程从这里开始", link: "/docs/welcome/welcome" },
          // { text: "帮助我们", link: "/docs/welcome/helpwithus" },
        ],
      },
      {
        text: "关于 Web 3",
        items: [
          { text: "什么是 Web 3", link: "/docs/aboutweb3/whatisweb3" },
          { text: "Web 2 vs Web 3", link: "/docs/aboutweb3/web2_vs_web3" },
        ],
      },
      {
        text: "加密算法",
        items: [
          { text: "为什么加密算法在第一位", link: "/docs/encryption/firstofall" },
          { text: "RSA算法（Rivest-Shamir-Adleman）", link: "/docs/encryption/rsa" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
