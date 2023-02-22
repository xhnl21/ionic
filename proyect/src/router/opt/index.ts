import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Opt'
  },
  {
    path: '/Opt',
    component: () => import ('../../views/opt/index.vue')
  }
]

export default routes