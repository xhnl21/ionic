import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Help'
  },
  {
    path: '/Help',
    component: () => import ('../../views/help/index.vue')
  }
]

export default routes