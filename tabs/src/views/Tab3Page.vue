<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>GOOGLE MAPS APPS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- <g-map
        :disableUI="false"
        :zoom="12"
        mapType="roadmap"
        :center="{ lat: -33.451291048345425, lng: -70.66532145767152 }">
      </g-map> -->
      <!-- <Suspense>
        <g-map></g-map>
      </Suspense>       -->
      <capacitor-google-map id="map"></capacitor-google-map>
      <!-- <button onclick="createMap()">Create Map</button> -->
    </ion-content>
  </ion-page>
</template>


<script>
  import { GoogleMap } from '@capacitor/google-maps';

const createMap = async () => {
  const mapRef = document.getElementById('map');

  const newMap = await GoogleMap.create({
    id: 'my-map', // Unique identifier for this map instance
    element: mapRef, // reference to the capacitor-google-map element
    apiKey: 'AIzaSyBGXPFQcq8Rp895QqwnrYhbSGC-i9XHI64', // Your Google Maps API Key
    config: {
      center: {
        // The initial position to be rendered by the map
        lat: 33.6,
        lng: -117.9,
      },
      zoom: 8, // The initial zoom level to be rendered by the map
    },
  });
};
import { defineComponent } from 'vue';
// import  GMap  from "./GMap.vue";

export default defineComponent({
  name: 'Tab3Page',
  // components: { GMap }
});
</script>
<style scoped>

</style>