import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Settings'
  },
  {
    path: '/Settings',
    component: () => import ('../../views/settings/index.vue')
  }
]

export default routes