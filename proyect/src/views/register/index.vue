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
        <form  @submit.prevent="validate">
          <ion-grid>
            <div class="space"></div>
            <div class="space"></div>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">Full Name</ion-label>
                  <ion-input type="text" v-model="data.fname" ref="fname">
                  <ion-icon :ios="person" :md="person" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;</ion-input>
                </ion-item>
              </ion-col>
            </ion-row>            
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">Email Address / Mobile Number</ion-label>
                  <ion-input type="text" v-model="data.email">
                  <ion-icon :ios="person" :md="person" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;</ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item v-if="showPass === false">
                  <ion-label position="stacked">Enter Password</ion-label> 
                  <ion-input fill="outline" type="password" v-model="data.pass">
                    <ion-icon :ios="lockClosed" :md="lockClosed" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
                  </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPassword">
                      <ion-icon :ios="eye" :md="eye"></ion-icon>
                    </ion-button>
                  </ion-buttons>
                </ion-item>  
                <ion-item v-else>
                  <ion-label position="stacked">Enter Password</ion-label> 
                  <ion-input fill="outline" type="text" v-model="data.pass">
                    <ion-icon :ios="lockClosed" :md="lockClosed" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
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
                  <ion-input fill="outline" type="password" v-model="data.cpass">
                    <ion-icon :ios="lockClosed" :md="lockClosed" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
                  </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPasswordA">
                      <ion-icon :ios="eye" :md="eye"></ion-icon>
                    </ion-button>
                  </ion-buttons>
                </ion-item>  
                <ion-item v-else>
                  <ion-label position="stacked">Confirm Password</ion-label> 
                  <ion-input fill="outline" type="text" v-model="data.cpass">
                    <ion-icon :ios="lockClosed" :md="lockClosed" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
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
                  <ion-checkbox slot="start" expand="full" v-model="data.privacity"></ion-checkbox>
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
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { loadingController, alertController } from '@ionic/vue';
import { eye, eyeOff, arrowBackSharp, lockClosed, person } from 'ionicons/icons';
import { defineComponent } from 'vue';
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
      validate () {
          var msj = "Please wait..."
          if (this.data.fname === "") {
            msj = "Please, the full name field must not be empty."
            this.showLoading(msj, false); 
            return 0;
          }
          if (this.data.email === "") {
            msj = "Please Enter Email Address / Mobile Number."
            this.showLoading(msj, false);  
            return 0;
          } 
          if (this.data.pass === "" || this.data.cpass === "") {
            msj = "Please enter your password."
            this.showLoading(msj, false);  
            return 0;
          }else {
              if (this.data.pass !== this.data.cpass) {
                  msj = "your password does not match the confirmation"
                  this.showLoading(msj, false);
                  return 0;
              }
          }
          if (this.data.privacity === false) {
              msj = "Please you must accept the terms and conditions."
              this.showLoading(msj, false);
              return 0;
          }    
          this.showLoading(msj, false);          
          setTimeout(() => {
            this.form();
          }, 2000);
      },       
      form () {
        console.log(this.data.fname); 
        this.$router.push('/Opt');              
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
      const showLoading = async (msj: any, type: boolean) => {
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
        eye, eyeOff, arrowBackSharp, lockClosed, person,
        showLoading
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
