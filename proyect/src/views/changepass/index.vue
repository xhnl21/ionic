<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Settings">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">Change Password</ion-title>
      </ion-toolbar>
    </ion-header>    
    <ion-content class="no-scroll">
      <div id="container">
        <form @submit.prevent="validate">
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
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>              
            <ion-row>
              <ion-col>
                <ion-button type="submit" color="light" expand="full" shape="round">Change Password</ion-button>
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
import { lockClosed, arrowBackSharp, eye, eyeOff, } from 'ionicons/icons';
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
      validate () {
          var msj = "Please wait..."        
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
          this.showLoading(msj, false);          
          setTimeout(() => {
            this.form();
          }, 2000);
      },       
      form () {
        console.log(this.data); 
        this.$router.push('/Settings');              
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
      const erroP = ref(false);
      const errorPass = (state: any) => (erroP.value = state);        
      return {
        lockClosed, arrowBackSharp, eye, eyeOff,
        erroP, errorPass,
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
