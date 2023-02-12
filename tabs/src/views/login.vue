<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
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
              <a class="small-text">Forgot Password?</a>
            </ion-col>
          </ion-row>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default defineComponent({
  name: 'Tab3Page',
  // components: { ExploreContainer}
});
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