<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" color="light" router-link="/Login">
          <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
        </ion-buttons> 
        <ion-title text-center>Enter OPT</ion-title>        
        <ion-buttons slot="end" router-link="/Welcome">Skip</ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <form @submit.prevent="form">
        <div id="container">
          <div class="space"></div>
          <div class="space"></div>
          <small style="text-align: center;">
            Please enter one time password which you have received at your resqistered email address / mobile number.
          </small>
          <div class="space"></div>
          <div class="space"></div>
          <ion-list>
            <ion-row>
              <ion-col>
                <ion-input type="text" v-model="data.a" class="borderInput"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input type="text" v-model="data.b" class="borderInput"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input type="text" v-model="data.c" class="borderInput"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input type="text" v-model="data.d" class="borderInput"></ion-input>
              </ion-col>              
            </ion-row>
          </ion-list>
          <div class="space"></div>
          <div class="space"></div>
          <div class="space"></div>
          <div class="space"></div>
          <ion-list>
            <ion-button type="submit" color="light" expand="full">Verify Code</ion-button>
          </ion-list>
          <ion-list>
            <ion-button type="submit" color="light" expand="full">Resend Code</ion-button>
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
                a:"",
                b:"",
                c:"",
                d:""
            }
        }
    },
    methods: {
      form () {
        console.log(this.data); 
        if (this.data.a !== "") {
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
  .borderInput{
    border: 1px solid;
  }
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
