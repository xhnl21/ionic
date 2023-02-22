import { createRouter, createWebHistory } from '@ionic/vue-router';
import welcome from './welcome';
import tutorial from './tutorial';
import login from './login';
import biometric from './biometric';
import forgot from './forgot';
import restpass from './restpass';
import register from './register';
import opt from './opt';
import dashboard from './dashboard';

const importRouter = [welcome,login,biometric,forgot,register,tutorial,restpass,opt,dashboard];
const routes: any[] = [];

function allRoutersX (data: any[]) {
    for (const j in data) {
        const rt = data[j];
        for (const i in rt) {
            routes.push(rt[i]);
        }
    }
}
allRoutersX(importRouter);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
