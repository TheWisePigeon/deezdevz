

import DefaultLayout from '~/layouts/Default.vue'
import PostPreview from '~/components/PostPreview.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('PostPreview', PostPreview)
}
