<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-button v-on:click="favorite()">Go to detail1</ion-button> -->
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
              <ion-label router-link="/Register">Sing Up</ion-label>
            </ion-col>
          </ion-row>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
// import { defineComponent } from 'vue';
import { IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonRow, IonCol, IonButton } from '@ionic/vue';
// export default defineComponent({
//     setup() {
//       return { 
//         IonLabel, IonRow, IonCol, IonButton, IonInput, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar
//       };
//     },
//     methods: {
//       favorite() {
//         console.log("demo");
//         this.$router.push('register')
//       },
//     },
// });
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
