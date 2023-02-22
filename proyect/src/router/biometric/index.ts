import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Biometric'
  },
  {
    path: '/Biometric',
    component: () => import ('../../views/biometric/index.vue')
  }
]

export default routes