import Theme from "vitepress/theme";
import "./style/var.css";
import Layout from './Layout/index.vue'
import { watch } from 'vue'



export default {
  ...Theme,
  enhanceApp({ router }: EnhanceAppContext) {
    if (typeof window === 'undefined') return
    watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === '/'),
        { immediate: true }
    )
}
} satisfies Theme
};
