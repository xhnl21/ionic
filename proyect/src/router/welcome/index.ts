import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Welcome'
  },
  {
    path: '/Welcome',
    component: () => import ('../../views/welcome/index.vue')
  }
]

export default routes