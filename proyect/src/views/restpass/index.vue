<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Forgot">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">Reset Password</ion-title>
      </ion-toolbar>
    </ion-header>    
    <ion-content class="no-scroll">
      <div id="container">
        <form @submit.prevent="form">
          <ion-grid>
            <div class="space"></div>
            <div class="space"></div>
            <ion-row>
              <ion-col>
                <small style="text-align: center;">
                  Please set your new password.
                </small>    
              </ion-col>
            </ion-row>
            <div class="space"></div>
            <div class="space"></div>
            <ion-row>
              <ion-col>
                <ion-item v-if="showPass === false">
                  <ion-label position="stacked">Enter Password</ion-label> 
                    <ion-input fill="outline" type="password" required v-model="data.pass">  
                  </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPassword">
                      <ion-icon :ios="eye" :md="eye"></ion-icon>
                    </ion-button>
                  </ion-buttons>
                </ion-item>  
                <ion-item v-else>
                  <ion-label position="stacked">Enter Password</ion-label> 
                    <ion-input fill="outline" type="text" required v-model="data.pass">  
                  </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPassword">
                      <ion-icon :ios="eyeOff" :md="eyeOff"></ion-icon> 
                    </ion-button>
                  </ion-buttons>
                </ion-item>     
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item v-if="showPassA === false">
                  <ion-label position="stacked">Confirm Password</ion-label> 
                    <ion-input fill="outline" type="password" required v-model="data.cpass">  
                  </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPasswordA">
                      <ion-icon :ios="eye" :md="eye"></ion-icon>
                    </ion-button>
                  </ion-buttons>
                </ion-item>  
                <ion-item v-else>
                  <ion-label position="stacked">Confirm Password</ion-label> 
                    <ion-input fill="outline" type="text" required v-model="data.cpass">  
                  </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPasswordA">
                      <ion-icon :ios="eyeOff" :md="eyeOff"></ion-icon> 
                    </ion-button>
                  </ion-buttons>
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
import { logoIonic, arrowBackSharp, eye, eyeOff, } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {},
    data () {
        return {
            showPass:false,
            showPassA:false,
            data: {
                pass:"",
                cpass:"",
            }
        }
    },
    methods: {
      form () {
        console.log(this.data);                
        if (this.data.pass === "" || this.data.cpass === "") {
          this.newPass(true);
        }else {
            if (this.data.pass === this.data.cpass) {
                this.plaseWait(true);
            } else {
                this.errorPass(true);
            }
        }      
      },
      showPassword () {
        if (this.showPass === false) {
          this.showPass = true;
        } else {
          this.showPass = false;
        }
      },
      showPasswordA () {
        if (this.showPassA === false) {
          this.showPassA = true;
        } else {
          this.showPassA = false;
        }
      },      
    },
    setup() {
      const pWait = ref(false);
      const plaseWait = (state: any) => (pWait.value = state);
      const nPass = ref(false);
      const newPass = (state: any) => (nPass.value = state);
      const erroP = ref(false);
      const errorPass = (state: any) => (erroP.value = state);        
      return {
        logoIonic, arrowBackSharp, eye, eyeOff,
        pWait, plaseWait,
        erroP, errorPass,
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
    /* top: 50%; */
    left: 10%;
    margin: -25px 0 0 -25px;
    /* transform: translateY(-50%); */
    width: 90%;
  }
  #container a {
    text-decoration: none;
  }
</style>
