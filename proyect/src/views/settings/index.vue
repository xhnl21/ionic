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
            <ion-list lines="full">
              <ion-item>
                <ion-icon slot="start" :ios="person" :md="person"></ion-icon>
                <ion-label>My Profile</ion-label>  
                <ion-button slot="end" color="light" shape="round" @click="myProfile">
                  <ion-icon :ios="arrowForward" :md="arrowForward"></ion-icon> 
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :ios="helpBuoy" :md="helpBuoy"></ion-icon> 
                <ion-label>Help</ion-label>  
                <ion-button slot="end" color="light" shape="round" @click="help">
                  <ion-icon :ios="arrowForward" :md="arrowForward"></ion-icon> 
                </ion-button>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :ios="notificationsOutline" :md="notificationsOutline"></ion-icon> 
                <ion-label>Push Notifications</ion-label>  
                <ion-toggle slot="end" v-model="noti" @click="notifications"></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :ios="fingerPrintOutline" :md="fingerPrintOutline"></ion-icon> 
                <ion-label>FingerPrint Id</ion-label>  
                <ion-toggle slot="end" v-model="bio" @click="biometric"></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :ios="happyOutline" :md="happyOutline"></ion-icon> 
                <ion-label>Face Id</ion-label>  
                <ion-toggle slot="end" v-model="faceId" @click="face"></ion-toggle>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :ios="lockClosed" :md="lockClosed"></ion-icon> 
                <ion-label>Change Password</ion-label>  
                <ion-button slot="end" color="light" shape="round" @click="changePassword">
                  <ion-icon :ios="arrowForward" :md="arrowForward"></ion-icon> 
                </ion-button>
              </ion-item>                            
            </ion-list>            
          </form>
        </div>
      </ion-content>
    </ion-page>
  </template>
  <script>
  import { arrowForward, happyOutline, notificationsOutline, helpBuoy, arrowBackSharp, eye, eyeOff, lockClosed, logIn, person, fingerPrintOutline, logoGoogle, logoFacebook } from 'ionicons/icons';
  import { loadingController, alertController } from '@ionic/vue';
  export default {
    data () {
        return {
            noti:true,
            bio:true,
            faceId:true,
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
      changePassword () {
        this.$router.push('/Changepass');
      },
      myProfile () {
        this.$router.push('/Myprofile');
      },
      help () {
        this.$router.push('/Help');
      },
      notifications () {
        var msj = "Las notificaciones ha sido activadas"  
        if (this.noti === true) {
          msj = "Las notificaciones ha sido desactivadas"
          this.showLoading(msj, false)
        }
        this.showLoading(msj, false)
      },
      biometric () {
        var msj = "Biometric FingerPrint ha sido activadas"  
        if (this.bio === true) {
          msj = "Biometric FingerPrint ha sido desactivadas"
          this.showLoading(msj, false)
        }
        this.showLoading(msj, false)
      },
      face () {
        var msj = "Biometric Face ha sido activadas"  
        if (this.faceId === true) {
          msj = "Biometric Face ha sido desactivadas"
          this.showLoading(msj, false)
        }
        this.showLoading(msj, false)
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
        arrowForward, happyOutline,notificationsOutline, helpBuoy, arrowBackSharp, eye, lockClosed, eyeOff, person, logIn, fingerPrintOutline, logoGoogle, logoFacebook,
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
      transform: translateY(-90%);
      width: 90%;
    }
    #container a {
      text-decoration: none;
    }
  </style>
  