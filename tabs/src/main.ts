import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import { addIcons } from "ionicons";
import { IonReorder, IonReorderGroup, IonTabs, IonTabButton, IonTabBar, IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from "ionicons/icons";

import { IonicVue } from '@ionic/vue';

import { getPlatforms } from '@ionic/vue';
console.log(getPlatforms());



addIcons({
  archiveOutline,
  archiveSharp,
  bookmarkOutline, 
  bookmarkSharp, 
  heartOutline, 
  heartSharp, 
  mailOutline, 
  mailSharp, 
  paperPlaneOutline, 
  paperPlaneSharp, 
  trashOutline, 
  trashSharp, 
  warningOutline, 
  warningSharp
});

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

const app = createApp(App)
  .use(IonicVue)
  .use(store)
  .use(router);
  
router.isReady().then(() => {
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