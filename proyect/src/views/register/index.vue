<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-button color="light" router-link="/Login">
          <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
        </ion-button>   
        <ion-title>     
          Create Account
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <form  @submit.prevent="form">
        <div id="container">
          <div class="space"></div>
          <div class="space"></div>
          <ion-item lines="full">
            <ion-label position="stacked">Full name</ion-label>
            <ion-input type="text" v-model="data.fname"></ion-input>
          </ion-item>
          <div class="space"></div>
          <ion-item lines="full">
            <ion-label position="stacked">Email Address / Mobile Number</ion-label>
            <ion-input type="text" v-model="data.email"></ion-input>
          </ion-item>
          <div class="space"></div>
          <ion-item lines="full">
            <ion-label position="stacked">Password</ion-label>
            <ion-input type="password" v-model="data.pass"></ion-input>
          </ion-item>
          <div class="space"></div>
          <ion-item lines="full">
            <ion-label position="stacked">Confirm Password</ion-label>
            <ion-input type="password" v-model="data.cpass"></ion-input>
          </ion-item>
          <div class="space"></div>   
          <div class="space"></div>
          <div class="space"></div>
          <div class="space"></div>
          <div class="space"></div>                
          <ion-row>
            <ion-col>
              <ion-button type="submit" color="light" expand="full">Submit</ion-button>
            </ion-col>
            <ion-col>
              <ion-button router-link="/Login" color="light" expand="full">Cancel</ion-button>
            </ion-col>
          </ion-row>
        </div>
      </form>
      <ion-alert
        :is-open="pWait"
        message="Please wait..."
        @didDismiss="plaseWait(false)"
      >
      </ion-alert>
      <ion-alert
        :is-open="fName"
        message="Please, the full name field must not be empty."
        :buttons="['OK']"
        @didDismiss="plaseFname(false)"
      >
      </ion-alert>      
      <ion-alert
        :is-open="nPass"
        message="Please enter your password."
        :buttons="['OK']"
        @didDismiss="newPass(false)"
      >
      </ion-alert> 
      <ion-alert
        :is-open="erroP"
        message="your password does not match the confirmation"
        :buttons="['OK']"
        @didDismiss="errorPass(false)"
      >
      </ion-alert>   
      <ion-alert
        :is-open="erroE"
        message="Please Enter Email Address / Mobile Number."
        :buttons="['OK']"
        @didDismiss="erroEmail(false)"
      >
      </ion-alert>  
      <ion-alert
        :is-open="nPass"
        message="Please enter your password."
        :buttons="['OK']"
        @didDismiss="newPass(false)"
      >
      </ion-alert> 
      <ion-alert
        :is-open="erroP"
        message="your password does not match the confirmation"
        :buttons="['OK']"
        @didDismiss="errorPass(false)"
      >
      </ion-alert>                   
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { logoIonic, arrowBackSharp } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: { },
    data () {
        return {
            data: {
                fname:"",
                email:"",
                pass:"",
                cpass:""
            }
        }
    },
    methods: {
      form () {
        console.log(this.data.fname);
        if (this.data.fname === "") {
          this.plaseFname(true);
        }
        if (this.data.email === "") {
          this.erroEmail(true);
        } 
        if (this.data.pass === "" || this.data.cpass === "") {
          this.newPass(true);
        }else {
            if (this.data.pass === this.data.cpass) {
                this.plaseWait(true);
                this.$router.push('/Opt');
            } else {
                this.errorPass(true);
            }
        }                 
      }
    },
    setup() {
      const pWait = ref(false);
      const plaseWait = (state: any) => (pWait.value = state);
      const nPass = ref(false);
      const newPass = (state: any) => (nPass.value = state);
      const erroP = ref(false);
      const errorPass = (state: any) => (erroP.value = state);
      const fName = ref(false);
      const plaseFname = (state: any) => (fName.value = state);
      const erroE = ref(false);
      const erroEmail = (state: any) => (erroE.value = state);
      return {
        logoIonic, arrowBackSharp,
        pWait, plaseWait,
        erroP, errorPass,
        nPass, newPass,  
        fName, plaseFname,
        erroE, erroEmail
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
