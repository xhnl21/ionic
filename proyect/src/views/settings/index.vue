<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button router-link="/Dashboard">
                    <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
                </ion-button>   
            </ion-buttons>            
          <ion-title text-center style="text-align: center;">Settings</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="no-scroll">
        <div id="container" style="position: relative;">
          <form @submit.prevent="validate">
            <ion-grid>
              <ion-row>
                <ion-col>
                    <ion-item>
                        <ion-icon slot="start" :ios="logoGoogle" :md="logoGoogle"></ion-icon> 
                        <ion-button color="light" expand="full">My Profile</ion-button>
                    </ion-item>
                </ion-col>
              </ion-row>    
              <ion-row>
                <ion-col>
                  <ion-button color="light" expand="full">
                    <ion-icon :ios="logoFacebook" :md="logoFacebook"></ion-icon> 
                    &nbsp;&nbsp; Help
                  </ion-button>
                </ion-col>
              </ion-row>  
              <ion-row>
                <ion-col>
                  <ion-button color="light" expand="full">              
                    <ion-icon :ios="logoGoogle" :md="logoGoogle"></ion-icon> 
                    &nbsp;&nbsp; Push Notifications
                  </ion-button>
                </ion-col>
              </ion-row>    
              <ion-row>
                <ion-col>
                  <ion-button color="light" expand="full">
                    <ion-icon :ios="logoFacebook" :md="logoFacebook"></ion-icon> 
                    &nbsp;&nbsp; Fingerprint ID
                  </ion-button>
                </ion-col>
              </ion-row>  
              <ion-row>
                <ion-col>
                  <ion-button color="light" expand="full">              
                    <ion-icon :ios="logoGoogle" :md="logoGoogle"></ion-icon> 
                    &nbsp;&nbsp; Face ID
                  </ion-button>
                </ion-col>
              </ion-row>    
              <ion-row>
                <ion-col>
                  <ion-button color="light" expand="full">
                    <ion-icon :ios="logoFacebook" :md="logoFacebook"></ion-icon> 
                    &nbsp;&nbsp; Change Password
                  </ion-button>
                </ion-col>
              </ion-row>                                   
            </ion-grid>
          </form>
        </div>
      </ion-content>
    </ion-page>
  </template>
  <script>
  import { loadingController, alertController } from '@ionic/vue';
  import { arrowBackSharp, eye, eyeOff, lockClosed, logIn, person, fingerPrintOutline, logoGoogle, logoFacebook } from 'ionicons/icons';
  export default {
    data () {
        return {
            showPass:false,
            data: {
                email:"xhnl21@gmail.com",
                pass:"123456789",
            }
        }
    },
    methods: {
      validate () {
          this.showLoading("Please wait...", false);                
          setTimeout(() => {
            this.form();
          }, 2000);
      }, 
      form () {
          console.log("demoA");
          this.$router.push('/Welcome');
      },
      showPassword () {
        if (this.showPass === false) {
          this.showPass = true;
        } else {
          this.showPass = false;
        }
      },
    },
    setup() {
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
        arrowBackSharp, eye, lockClosed, eyeOff, person, logIn, fingerPrintOutline, logoGoogle, logoFacebook,
        showLoading,
      }
    }
  }; 
  </script>
  
  <style scoped>
    .no-scroll {
      --overflow: hidden;
    }
    .btnLinkFP {
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
      cursor: pointer;
    }
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
      cursor: pointer;
      margin-left: 10px;
    }
    .space {
      height: 25px;
    }
    #container {
      position: absolute;
      top: 45%;
      margin: 15px 0 0 20px;
      transform: translateY(-50%);
      width: 90%;
    }
    #container a {
      text-decoration: none;
    }
  </style>
  