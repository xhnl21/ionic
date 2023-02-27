import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Tconditions'
  },
  {
    path: '/Tconditions',
    component: () => import ('../../views/termconditions/index.vue')
  }
]

export default routes