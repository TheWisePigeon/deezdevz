
import '../tailwindconfig/tailwind.css'
import DefaultLayout from '~/layouts/Default.vue'
import PostPreview from '~/components/PostPreview.vue'
import DarkTheme from '~/components/DarkMode.vue'
import LightTheme from '~/components/LightMode.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('PostPreview', PostPreview)
  Vue.component('DarkTheme', DarkTheme)
  Vue.component('LightTheme', LightTheme)

      


}
