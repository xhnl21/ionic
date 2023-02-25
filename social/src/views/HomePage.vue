<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <button @click="login">Login Using Google</button>
        <br><br><br>
        <GoogleLogin :callback="callback"/>
        <br>
        <ion-item v-if="data.email_verified">
          <ion-avatar slot="start">
            <img :src=data.picture />
          </ion-avatar>
          <ion-label>{{ data.name }}</ion-label>
          <ion-label>{{ data.email }}</ion-label>
        </ion-item>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
// https://www.youtube.com/watch?v=hQ5aqvTEqxU
// https://developers.google.com/identity/openid-connect/openid-connect?hl=es-419#sendauthrequest
import { IonLabel, IonAvatar, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { googleSdkLoaded, decodeCredential } from 'vue3-google-login'
import { defineComponent } from 'vue';
export default defineComponent({
  components: { IonLabel, IonAvatar, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
    data () {
        return {
            showPass:false,
            showPassA:false,
            data: {
                email_verified:false,
                name:"",
                email:"",
                picture:"",
            }
        }
    },
    methods: {  
      login () {
        googleSdkLoaded((google) => {
          google.accounts.oauth2.initCodeClient({
            client_id: '676785461988-icoil0dtlld2fcp5kb22llst7t94mans.apps.googleusercontent.com',
            scope: 'openid profile email',
            enable_serial_consent:true,
            login_hint:true,
            callback: (response) => {
              console.log("Handle the response", response)
            }
          }).requestCode()
        })
      },  
      form () {
        console.log("demo");              
      },   
      callback (response) {
        const userData = decodeCredential(response.credential)
        console.log("Handle the userData", userData)
        this.data.email = userData.email;
        this.data.email_verified = userData.email_verified;
        this.data.name = userData.name;
        this.data.picture = userData.picture;
      }   
    },
    setup() {
      return {
        // callback
      };
    },
});
// const callback = (response:any) => {
//   // decodeCredential will retrive the JWT payload from the credential
//   const userData = decodeCredential(response.credential)
//   console.log("Handle the userData", userData)
//   // this.data.email = userData.email;
//   // this.data.email_verified = userData.email_verified;
//   // this.data.name = userData.name;
//   // this.data.picture = userData.picture;
// }
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
