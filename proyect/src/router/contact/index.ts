import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Contact'
  },
  {
    path: '/Contact',
    component: () => import ('../../views/contact/index.vue')
  }
]

export default routes