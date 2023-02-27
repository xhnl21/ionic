import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Changepass'
  },
  {
    path: '/Changepass',
    component: () => import ('../../views/changepass/index.vue')
  }
]

export default routes