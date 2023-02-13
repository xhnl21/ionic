<template>
    <!-- <div class="map" ref="mapDivRef"></div> -->
    <capacitor-google-map id="map"></capacitor-google-map>
</template>
  
<script>
// tutorial:https://devdactic.com/capacitor-google-maps-ionic
// nombre del proyecto:FurionGoogleMaps
// clave API: AIzaSyBGXPFQcq8Rp895QqwnrYhbSGC-i9XHI64
// import { ref, onBeforeMount } from 'vue';

import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { environment } from './environment.vue';
import { GoogleMap } from '@capacitor/google-maps';    
    export default{
        name: 'Gmap',
        async setup() {
            const apiKey = "AIzaSyDfu-PKZ1zO8POkdlrSWG36pLZEtbH5cz8Y";
            const mapElement = document.getElementById('map');
            const mapConfig = {
                center: {
                    lat: 33.6,
                    lng: -117.9,
                },
                zoom: 8,
                androidLiteMode: false,
            }
            const mapOptions = {
                id: 'map',
                apiKey: apiKey,
                config: mapConfig,
                element: mapElement,
            }

            // Create the Map Element
            const map = await GoogleMap.create(mapOptions);

            // Drop a Map Marker
            await map.addMarkers({
                coordinate: {
                    lat:-33.451291048345425, 
                    lng: -70.66532145767152
                },
                zoomm:8,
                title: 'Hello world',
            });
        }  
        // props: {
        //     center : {lat: Number , lng: Number},
        //     zoom : Number,
        //     mapType: String,
        //     disableUI: Boolean
        // },
        // setup(props) {
        //     const map = ref(null);
        //     const mapDivRef = ref(null);
        //     onBeforeMount(() => {
        //         const VUE_APP_GOOGLEMAPS_KEY="AIzaSyDfu-PKZ1zO8POkdlrSWG36pLZEtbH5cz8";
        //         const key = VUE_APP_GOOGLEMAPS_KEY;
        //         const googleMapScript = document.createElement("SCRIPT");  
        //         googleMapScript.setAttribute("type","text/javascript");              
        //         googleMapScript.setAttribute(
        //             "src",
        //             // `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&callback=initMap`
        //             // `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&sensor=false&callback=initMap`
        //             // `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
        //             `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly`
        //         );
        //         googleMapScript.setAttribute("defer",true);
        //         googleMapScript.setAttribute("asinc","");
        //         document.head.appendChild(googleMapScript);
        //     });            
        //     window.initMap = () => {
        //         console.log(mapDivRef.value);
        //         console.log(map.value);
        //         map.value = new window.google.maps.Map(mapDivRef.value, {
        //             mapTypeId: props.mapType || "hybrid",
        //             zoom: props.zoom || 8,
        //             disableDefaultUI: props.disableUI || false,
        //             center: props.center || { lat:-33.451291048345425, lng: -70.66532145767152 }
        //         });
        //     };            

        //     return {
        //         mapDivRef
        //     }
        // }
    };
</script>
<style scoped>
    .map {
        width: 100%;
        height: 300px;
        background-color: azure;
    }
</style>