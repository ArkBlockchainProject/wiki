//.vitepress/theme/index.ts
import { watch } from 'vue'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/index.scss'
import Layout from './Layout/index.vue'
import ani from './Layout/ani.vue'
import ChangeAni from './Layout/changeani.vue'

let homePageStyle: HTMLStyleElement | undefined


//TODO:增加动画_ChangeAni组件

//这里已经注册了一个组件，我还想注册一个组件，怎么办？  

export default {
    extends: DefaultTheme,
    Layout: Layout,
      components: {
    ChangeAni
  }
    enhanceApp({ router}: EnhanceAppContext) {
        if (typeof window === 'undefined') return
        watch(
            () => router.route.data.relativePath,
            () => updateHomePageStyle(location.pathname === '/'),
            { immediate: true }
        )
    },
} satisfies Theme


// 设置过渡动画
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return
        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
        :root {
            animation: rainbow 10s linear infinite;
        }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return
        homePageStyle.remove()
        homePageStyle = undefined
    }
}
// 如上29-31行所示，设置主题色过渡时间为12s