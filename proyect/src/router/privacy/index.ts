import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Privacy'
  },
  {
    path: '/Privacy',
    component: () => import ('../../views/privacy/index.vue')
  }
]

export default routes