import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Restpass'
  },
  {
    path: '/Restpass',
    component: () => import ('../../views/restpass/index.vue')
  }
]

export default routes