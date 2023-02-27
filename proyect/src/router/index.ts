import { createRouter, createWebHistory } from '@ionic/vue-router';
import tutorial from './tutorial';
import login from './login';
import biometric from './biometric';
import forgot from './forgot';
import restpass from './restpass';
import changepass from './changepass';
import register from './register';
import myprofile from './myprofile';
import help from './help';
import opt from './opt';
import welcome from './welcome';
import dashboard from './dashboard';
import settings from './settings';
import about from './about';
import contact from './contact';
import privacy from './privacy';
import termconditions from './termconditions';

// el orden de las paginas es importante ya que debe iniciar primero por la de "tutorial"
const importRouter = [
                        tutorial,login,biometric,forgot,register,myprofile,help,
                        about,contact,privacy,termconditions,
                        restpass,changepass,opt,welcome,dashboard,settings
                    ];
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
