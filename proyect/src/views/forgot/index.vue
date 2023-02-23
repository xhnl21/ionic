<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button slot="start" router-link="/Login">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>

        <ion-title text-center style="text-align: center;">Forgot Password</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container"  style="position: relative;">
        <form @submit.prevent="form">
            <ion-grid>
              <ion-row>
                <ion-col>
                  <small style="text-align: center;">
                    Please enter your registered email / mobile number to reset the password.
                  </small>     
                </ion-col>
              </ion-row>
              <div class="space"></div>
              <div class="space"></div>
              <ion-row>
                <ion-col>
                  <ion-item>
                    <ion-label position="stacked">Enter Email Address / Mobile Number</ion-label>
                    <ion-input fill="outline" type="email" v-model="data.email"></ion-input> 
                  </ion-item>   
                </ion-col>
              </ion-row>
              <div class="space"></div>
              <div class="space"></div>
              <div class="space"></div>
              <div class="space"></div>              
              <ion-row>
                <ion-col>
                  <ion-button type="submit" color="light" expand="full">Resent Password</ion-button>
                </ion-col>
              </ion-row>        
            </ion-grid>
            <!-- <div class="space"></div>
            <div class="space"></div>
            <small style="text-align: center;">
              Please enter your registered email / mobile number to reset the password.
            </small>
            <div class="space"></div>
            <div class="space"></div>
            <ion-list>
              <ion-item>
                <ion-label position="stacked">Enter Email Address / Mobile Number</ion-label>
                <ion-input fill="outline" type="email" v-model="data.email"></ion-input>
              </ion-item>
            </ion-list>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <ion-list>
              <ion-button type="submit" color="light" expand="full">Resent Password</ion-button>
            </ion-list>   -->
        </form>
      </div>  
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
    top: 5%;
    /* transform: translateY(-50%); */
    width: 80%;
  }
</style>
