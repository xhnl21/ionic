import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

// import { addIcons } from "ionicons";
// import { 
//   archiveOutline, archiveSharp, bookmarkOutline, 
//   bookmarkSharp, heartOutline, heartSharp, mailOutline, 
//   mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, 
//   trashSharp, warningOutline, warningSharp 
// } from "ionicons/icons";
// addIcons({
//   archiveOutline,
//   archiveSharp,
//   bookmarkOutline, 
//   bookmarkSharp, 
//   heartOutline, 
//   heartSharp, 
//   mailOutline, 
//   mailSharp, 
//   paperPlaneOutline, 
//   paperPlaneSharp, 
//   trashOutline, 
//   trashSharp, 
//   warningOutline, 
//   warningSharp
// });

import { 
  IonInput, IonButton, IonCol, IonRow, IonFooter, 
  IonReorder, IonReorderGroup, IonTabs, IonTabButton, 
  IonTabBar, IonButtons, IonHeader, IonMenuButton, IonPage, 
  IonTitle, IonToolbar, IonApp, IonContent, IonIcon, IonItem, 
  IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, 
  IonNote, IonRouterOutlet, IonSplitPane 
} from '@ionic/vue';
import * as allIcons from "ionicons/icons";

declare global {
  var icons: any;
}

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .mixin({
    data() {
      return {
        i: allIcons,
      };
    },
    mounted () {
      window.icons = allIcons;
    },
    // methods: {
    //   icon(name: any) {
    //     // console.log(this.i[name]);
    //     // return ":ios="+this.i[name]+" :md="+this.i[name];
    //     return this.i[name];
    //   }
    // }
  });
router.isReady().then(() => {
  app.component('ion-input', IonInput)
  app.component('ion-button', IonButton)
  app.component('ion-col', IonCol)
  app.component('ion-row', IonRow) 
  app.component('ion-footer', IonFooter) 
  app.component('ion-reorder', IonReorder) 
  app.component('ion-reorder-group', IonReorderGroup)
  app.component('ion-tabs', IonTabs)
  app.component('ion-tab-button', IonTabButton)
  app.component('ion-tab-bar', IonTabBar)
  app.component('ion-buttons', IonButtons)
  app.component('ion-header', IonHeader)
  app.component('ion-menu-button', IonMenuButton)
  app.component('ion-page', IonPage)
  app.component('ion-title', IonTitle)
  app.component('ion-toolbar', IonToolbar)
  app.component('ion-app', IonApp)
  app.component('ion-content', IonContent)
  app.component('ion-icon', IonIcon)
  app.component('ion-item', IonItem)
  app.component('ion-label', IonLabel)
  app.component('ion-list', IonList)
  app.component('ion-list-header', IonListHeader)
  app.component('ion-menu', IonMenu)
  app.component('ion-menu-toggle', IonMenuToggle)
  app.component('ion-note', IonNote)
  app.component('ion-router-outlet', IonRouterOutlet)
  app.component('ion-split-pane', IonSplitPane)  
  app.mount('#app');
});