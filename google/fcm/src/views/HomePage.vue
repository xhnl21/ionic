<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Log In</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container" style="position: relative;">
        <form>
          <div v-if="signedIn">
            <b>userId:</b> {{ userId }}<br>
            <b>displayName:</b> {{ displayName }}<br>
            <b>email:</b> {{ email }}<br><br>
            <img :src="imageUrl" width="200">
          </div>
          <div>
            <ion-button v-if="!signedIn" color="dark" @click="signinGoogle()">
              Sign in
            </ion-button>

            <ion-button v-if="signedIn" color="dark" @click="signoutGoogle()">
              Sign out
            </ion-button>
          </div>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>
<!--  
crear certificado
keytool -genkey -v -keystore debug.keystore -alias debug -keyalg RSA -keysize 2048 -validity 10000
ver las credenciales
keytool -list -v -keystore debug.keystore
clave para registrar la app con FCM
SHA1: 7B:1F:76:3E:E8:2B:AE:BE:30:D8:04:1C:9D:AD:06:7E:1B:CB:5D:B8
nombre del proyecto
project-945665940922
 -->
 <!-- ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=236045340364-qrjn93bngvjaa78kk46b8doii6296t0j.apps.googleusercontent.com
npm install --save @ionic-native/google-plus -->
<script lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref , defineComponent } from 'vue'
import { GooglePlus } from '@ionic-native/google-plus'
export default defineComponent({
  components: { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar },
  setup() {
    const signedIn = ref(false)
    const userId = ref('')
    const displayName = ref('')
    const email = ref('')
    const imageUrl = ref('')

    // #region Methods
    const signinGoogle = () => {

      GooglePlus.login({
        webClientId:'684898322638-trlo32dvpb2m2c03hhk3t2eqvf8ainth.apps.googleusercontent.com',
        offline:true
      })
      .then((user) => {
        console.log('user', user)
        userId.value = user.userId
        displayName.value = user.displayName
        email.value = user.email
        imageUrl.value = user.imageUrl
        signedIn.value = true
      })
      .catch((err) => {
        switch (err) {
          case 12501:
          // user cancel signin
          break
          default:
            alert(`Error: ${err}`)
        }
      })
    }

    const signoutGoogle = () => {
      GooglePlus.logout()
      .then((res) => {
        // res = “Logged user out”
        userId.value = ""
        displayName.value = ""
        email.value = ""
        imageUrl.value = ""
        signedIn.value = false
      })
      .catch((err) => {
        console.log('err', err)
      })
    }
    // #endregion Methods

    return {
      signedIn,
      userId,
      displayName,
      email,
      imageUrl,
      signinGoogle, signoutGoogle
    }
  }
});
</script>

<style scoped>
.btnLink {
  --background: rgb(255, 255, 255);
  --background-hover: rgb(255, 255, 255);
  --background-activated: rgb(255, 255, 255);
  --background-focused: rgb(255, 255, 255);
  --color: #000;
  --border-radius: 0;
  --border-color: rgb(255, 255, 255);
  --border-style: solid;
  --border-width: 1px;
  --box-shadow: rgb(255, 255, 255);
  --padding-top: -10px;
  --padding-bottom: 10px;
  text-decoration: underline !important;
}
.scroll-y {
    overflow-y: hidden !important;
}
.space {
  height: 25px;
}
#container {
  position: absolute;
  top: 45%;
  /* left: 10%; */
  /* margin: -25px 0 0 -25px; */
  margin: 15px 0 0 20px;
  transform: translateY(-50%);
  width: 90%;
}
#container a {
  text-decoration: none;
}
</style>
