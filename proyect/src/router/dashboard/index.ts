import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Dashboard'
  },
  {
    path: '/Dashboard',
    component: () => import ('../../views/dashboard/index.vue')
  }
]

export default routes