import { defineConfig } from "vitepress";

export default defineConfig({
  markdown: {
    lineNumbers: true,
  },

  title: "Web 3 Helper",
  description: "一份面向所有人的 Web 3 入门知识库",
  lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，本地报错可以先注释
  base: "//",
  themeConfig: {
    darkModeSwitchLabel: '模式',
    //本地搜索
    search: {
      provider: "local",
    },
    sidebarMenuLabel: "目录",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    returnToTopLabel: "返回顶部",
    outline: {
      // level: [2,4], // 显示2-4级标题
      level: "deep", // 显示2-6级标题
      label: "当前页大纲", // 文字显示
    },
    //编辑本页
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path", // 改成自己的仓库
      text: "在GitHub编辑本页",
    },
    //上次更新时间
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    logo: "/books.png",
    siteTitle: "Web 3 Helper",
    i18nRouting: true,

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
          { text: "请注意", link: "/docs/welcome/first" },
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
          {
            text: "为什么加密算法在第一位",
            link: "/docs/encryption/firstofall",
          },
          {
            text: "RSA算法（Rivest-Shamir-Adleman）",
            link: "/docs/encryption/rsa",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
