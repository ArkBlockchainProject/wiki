<!-- .vitepress/theme/Layout/index.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

import { toggleAppearance } from './toggleAppearance'
toggleAppearance(isDark) //实现切换主题过渡动画
</script>

<template>
    <DefaultTheme.Layout> </DefaultTheme.Layout>
</template>
