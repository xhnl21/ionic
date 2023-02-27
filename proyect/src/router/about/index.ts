import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/About'
  },
  {
    path: '/About',
    component: () => import ('../../views/about/index.vue')
  }
]

export default routes