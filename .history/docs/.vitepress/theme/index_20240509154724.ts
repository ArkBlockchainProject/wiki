import Theme from "vitepress/theme";
import "./style/var.css";
import Mycomponent from "./Layout.vue"


export default {
  ...Theme,
  enhanceApp({ app }){
    // app is the Vue 3 app instance from `createApp()`.
    app.component('Mycomponent', Mycomponent)
  }
};
