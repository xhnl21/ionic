import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Register'
  },
  {
    path: '/Register',
    component: () => import ('../../views/register/index.vue')
  }
]

export default routes