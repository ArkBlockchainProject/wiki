<!-- .vitepress/theme/Layout/index.vue
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

</script>

<template>
    <DefaultTheme.Layout> </DefaultTheme.Layout>
</template> -->
<!-- .vitepress/theme/Layout/index.vue -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import Comment from './Comment.vue'
const { isDark } = useData()

import { toggleAppearance } from './toggleAppearance.ts'
toggleAppearance(isDark) //实现切换主题过渡动画
</script>

<template>
    <DefaultTheme.Layout />
</template>