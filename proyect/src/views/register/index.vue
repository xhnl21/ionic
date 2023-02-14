<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button @click="() => router.push('/Login')">Go to detail</ion-button>
        <ion-button router-link="/Login">
          <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
        </ion-button>   
        <ion-title>     
          Register
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <form>
        <ion-item lines="full">
          <ion-label position="floating">First name</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item>
        <ion-item lines="full">
          <ion-label position="floating">Last name</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item>
        <ion-item lines="full">
          <ion-label position="floating">Email</ion-label>
          <ion-input type="text" required></ion-input>
        </ion-item>
        <ion-item lines="full">
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" required></ion-input>
        </ion-item>
        <ion-row>
          <ion-col>
            <ion-button type="submit" color="danger" expand="block">Sign Up</ion-button>
          </ion-col>
        </ion-row>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { logoIonic, arrowBackSharp } from 'ionicons/icons';
import { IonIcon, IonLabel, IonRow, IonCol, IonButton, IonInput, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    components: { IonIcon },
    setup() {
      const router = useRouter();
      return { 
        router,
        logoIonic, arrowBackSharp,
        IonLabel, IonRow, IonCol, IonButton, IonInput, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar
      };
    },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
