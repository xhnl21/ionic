<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-icon onload="getIcons('mailOutline')"></ion-icon>
        <!-- <ion-icon :src="icon('mailOutline')"></ion-icon> -->
        <ion-title>Log In</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container" style="position: relative;">
        <form>
          <ion-item lines="full">
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" required></ion-input>
          </ion-item>
          <ion-item lines="full">
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" required></ion-input>
          </ion-item>
          <ion-row>
            <ion-col>
              <ion-button type="submit" color="danger" expand="block">Sign In</ion-button>              
              <ion-label router-link="/Forgot">Forgot Password?</ion-label>
              <br><br><br>
              <ion-label>New User?</ion-label> <br><br>
              <ion-button router-link="/Register">Sing up</ion-button>  
            </ion-col>
          </ion-row>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">import { IonPage, IonHeader, IonToolbar, IonIcon, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonRow, IonCol, IonButton } from '@ionic/vue';

// console.log(icons['add']);

// console.log(window.icons);

//  icon(name: any) {
//   // console.log(this.i[name]);
//   // return ":ios="+this.i[name]+" :md="+this.i[name];
//   return this.i[name];
//   window.icons
// }
function getIcons(icon: any): string {
    const icons = window.icons;
    return ":ios="+icons[icon]+" :md="+icons[icon];
}
// export default {

// };

</script>

<style scoped>
#container {
  position: absolute;
  top: 50%;
  left: 10%;
  margin: -25px 0 0 -25px;
  transform: translateY(-50%);
  width: 90%;
}
#container a {
  text-decoration: none;
}
</style>
