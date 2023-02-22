<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button color="light" router-link="/Login">
          <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
        </ion-button>   
        <ion-title>Biometric Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <form @submit.prevent="form">
        <div id="container">
          <div class="space"></div>
          <div class="space"></div>
          <ion-label>Welcome Back</ion-label>
          <div class="space"></div>
          <div class="space"></div>
          <!-- <ion-list>
            <ion-item>
              <ion-label position="stacked">Enter Email Address / Mobile Number</ion-label>
              <ion-input fill="outline" type="email" v-model="data.email"></ion-input>
            </ion-item>
          </ion-list> -->
          <div class="space"></div>
          <div class="space"></div>
          <div class="space"></div>
          <div class="space"></div>
          <ion-list>
            <ion-label>Login using fingerprint</ion-label>
            <ion-label>Using you finger print to login to account</ion-label>
          </ion-list>  
        </div>        
      </form>
      <ion-alert
        :is-open="pWait"
        message="Please wait..."
        @didDismiss="plaseWait(false)"
      >
      </ion-alert>
      <ion-alert
        :is-open="nPass"
        message="Please Check your email."
        :buttons="['OK']"
        @didDismiss="newPass(false)"
      >
      </ion-alert> 
      <ion-alert
        :is-open="erroE"
        message="Please Enter Email Address / Mobile Number."
        :buttons="['OK']"
        @didDismiss="erroEmail(false)"
      >
      </ion-alert>      
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { logoIonic, arrowBackSharp } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {},
    data () {
        return {
            message:"",
            data: {
                email:"xhnl21@gmail.com",
            }
        }
    },
    methods: {
      form () {
        console.log(this.data); 
        if (this.data.email !== "") {
          // this.plaseWait(true);
          // setInterval(this.newPass(true), 5000);
          // this.newPass(true);
          // this.$router.push({ name: "/Restpass" });
          this.$router.push('/Restpass');          
        } else {
          this.erroEmail(true);
        }
      },
    },
    setup() {
      const pWait = ref(false);
      const plaseWait = (state: any) => (pWait.value = state);
      const nPass = ref(false);
      const newPass = (state: any) => (nPass.value = state);
      const erroE = ref(false);
      const erroEmail = (state: any) => (erroE.value = state);        
      return {
        logoIonic, arrowBackSharp,
        pWait, plaseWait,
        erroE, erroEmail,
        nPass, newPass
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
