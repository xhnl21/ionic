<!-- eslint-disable vue/no-deprecated-filter -->
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
        <ion-button @click="googleSignup">Sign in</ion-button>
        <ion-card>
          <ion-card-content>
{{ dt }}
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonCardContent, IonCard, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
// import '@codetrix-studio/capacitor-google-auth';
// import { Plugins } from '@capacitor/core';
// // import { WebPlugin } from '@capacitor/core';
// import { defineComponent } from 'vue';
// export default defineComponent({
//   components: { IonCardContent, IonCard, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
//   setup() {
//       const userInfo = null;
//       const googleSignup = async () => {
//         console.log("demo");
//           // eslint-disable-next-line no-undef
//           // const googleUser = await WebPlugin.GoogleAuthWeb.signIn(null);
//           // const googleUser = await WebPlugin.GoogleAuthPlugin.signIn(null);          
//           const googleUser = await Plugins.GoogleAuth.signIn(null);
//           console.log('my user: ', googleUser);
//           this.userInfo = googleUser;
//       }
//       return {
//         userInfo, googleSignup,
//       };
//     },
// });
import { defineComponent, onMounted } from 'vue';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { loadingController, alertController } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
export default defineComponent({
  components: { IonCardContent, IonCard, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
  data () {
        return {
        dt:null
        }
    },
    
    methods: { 
      async googleSignup () {
        const response = await GoogleAuth.signIn();
        console.log(response);
        this.dt = response
        this.showLoading(response.email, false); 
        alert(response.email)            
      }, 
      async googleSignup2 () {
        const response = await Plugins.GoogleAuth.signIn();
        console.log(response);
        this.dt = response
        this.showLoading(response.email, false); 
        alert(response.email)            
      },             
    },    
  setup() {
    onMounted(() => {
      GoogleAuth.initialize({
        clientId: '684898322638-trlo32dvpb2m2c03hhk3t2eqvf8ainth.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });
    });

    // const googleSignup = async () => {
    //   const response = await GoogleAuth.signIn();
    //   console.log(response);
    //   showLoading(response.email, false); 
    //   alert(response.email)
    // };

    const showLoading = async (msj, type) => {
        if (type === false) {
          const loading = await loadingController.create({
              message: msj,
              duration: 1000
          });
          loading.present();
          return 0;
        }
        const alert = await alertController.create({
            // header: 'Error',
            // subHeader: 'Important message',
            message: msj,
            buttons: ['OK'],
        });
        await alert.present();
    }
    return {
      showLoading,
      // googleSignup,
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
