import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Myprofile'
  },
  {
    path: '/Myprofile',
    component: () => import ('../../views/myprofile/index.vue')
  }
]

export default routes