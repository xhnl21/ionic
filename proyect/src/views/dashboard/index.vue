<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title text-center>MiAutoBox</ion-title>
        <ion-buttons slot="end" router-link="/Welcome">
          <ion-icon :ios="searchOutline" :md="searchOutline"></ion-icon>
        </ion-buttons>     
        <ion-buttons slot="end" router-link="/Welcome">
          <ion-icon :ios="notificationsOutline" :md="notificationsOutline"></ion-icon>
        </ion-buttons>   
        <ion-buttons slot="end" router-link="/Welcome">
          <ion-icon :ios="cartOutline" :md="cartOutline"></ion-icon>
        </ion-buttons>                
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      welcomw
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { notificationsOutline, searchOutline, cartOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {},
    data () {
        return {}
    },
    methods: {},
    setup() {       
      return { 
        notificationsOutline, searchOutline, cartOutline
      };
    },
});
</script>

<style scoped>
  .space {
    height: 25px;
  }
  .no-scroll {
    --overflow: hidden;
  }
  #container {
    position: absolute;
    left: 10%;
    margin: -25px 0 0 0;
    width: 80%;
  }
</style>
