
import '../tailwindconfig/tailwind.css'
import DefaultLayout from '~/layouts/Default.vue'
import PostPreview from '~/components/PostPreview.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('PostPreview', PostPreview)
}
