<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Login">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">Create Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container">
        <form  @submit.prevent="form">
          <ion-grid>
            <div class="space"></div>
            <div class="space"></div>
            <ion-row>
              <ion-col>
                <ion-item lines="full">
                  <ion-label position="stacked">Full Name</ion-label>
                  <ion-input type="text" v-model="data.fname"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>            
            <ion-row>
              <ion-col>
                <ion-item lines="full">
                  <ion-label position="stacked">Email Address / Mobile Number</ion-label>
                  <ion-input type="text" v-model="data.email"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
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
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-checkbox slot="start" expand="full" required v-model="data.privacity"></ion-checkbox>
                  <ion-label>
                    <p style="font-size: 10px;line-height: 120%;">
                      By Login in you agree to our Terms & <br> Condition and Privaticy Policy 
                    </p>              
                  </ion-label>
                </ion-item> 
              </ion-col>
            </ion-row>                         
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
      <ion-alert
          :is-open="priv"
          message="Please you must accept the terms and conditions."
          :buttons="['OK']"
          @didDismiss="privacitys(false)"
        >
      </ion-alert>                         
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { eye, eyeOff, arrowBackSharp } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: { },
    data () {
        return {
            showPass:false,
            showPassA:false,
            data: {
                fname:"",
                email:"",
                pass:"",
                cpass:"",
                privacity:false
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
              console.log(this.data);
              
            } else {
                this.errorPass(true);
            }
        }
        if (this.data.privacity === false) {
          this.privacitys(true);
        } else {
          this.plaseWait(true);
          this.$router.push('/Opt');
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
      const fName = ref(false);
      const plaseFname = (state: any) => (fName.value = state);
      const erroE = ref(false);
      const erroEmail = (state: any) => (erroE.value = state);
      const priv = ref(false);
      const privacitys = (state: any) => (priv.value = state);
      return {
        eye, eyeOff, arrowBackSharp,
        pWait, plaseWait,
        erroP, errorPass,
        nPass, newPass,  
        fName, plaseFname,
        erroE, erroEmail,
        priv, privacitys
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
