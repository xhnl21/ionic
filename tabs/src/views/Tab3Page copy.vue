<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>GOOGLE MAPS APPS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- <g-map
        :disableUI="false"
        :zoom="12"
        mapType="roadmap"
        :center="{ lat: -33.451291048345425, lng: -70.66532145767152 }">
      </g-map> -->
      <g-map></g-map>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import  GMap  from "./GMap.vue";

export default defineComponent({
  name: 'Tab3Page',
  components: { GMap }
});
</script>
<style scoped>

</style>