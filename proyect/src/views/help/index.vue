<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
              <ion-button router-link="/Settings">
                  <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
              </ion-button>   
          </ion-buttons>            
        <ion-title text-center style="text-align: center;">Help</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container" style="position: relative;">
        <form @submit.prevent="validate">
          <ion-list lines="full">
            <ion-item>
              <ion-icon slot="start" :ios="peopleOutline" :md="peopleOutline"></ion-icon>
              <ion-label>About</ion-label>  
              <ion-button slot="end" color="light" shape="round" @click="about">
                <ion-icon :ios="arrowForward" :md="arrowForward"></ion-icon> 
              </ion-button>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" :ios="documentLockOutline" :md="documentLockOutline"></ion-icon> 
              <ion-label>Privacy</ion-label>  
              <ion-button slot="end" color="light" shape="round" @click="privacy">
                <ion-icon :ios="arrowForward" :md="arrowForward"></ion-icon> 
              </ion-button>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" :ios="receiptOutline" :md="receiptOutline"></ion-icon> 
              <ion-label>Terms & Conditions</ion-label>  
              <ion-button slot="end" color="light" shape="round" @click="tconditions">
                <ion-icon :ios="arrowForward" :md="arrowForward"></ion-icon> 
              </ion-button>
            </ion-item>
            <ion-item>
              <ion-icon slot="start" :ios="callOutline" :md="callOutline"></ion-icon> 
              <ion-label>Contact</ion-label>  
              <ion-button slot="end" color="light" shape="round" @click="contact">
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
  import { loadingController, alertController } from '@ionic/vue';
  import { callOutline, arrowForward, peopleOutline, receiptOutline, helpBuoy, arrowBackSharp, eye, eyeOff, documentLockOutline, logIn, person, fingerPrintOutline, logoGoogle, logoFacebook } from 'ionicons/icons';
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
      about () {
        this.$router.push('/About');
      },
      privacy () {
        this.$router.push('/Privacy');
      },
      tconditions () {
        this.$router.push('/Tconditions');
      },
      contact () {
        this.$router.push('/Contact');
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
        callOutline, arrowForward, peopleOutline, receiptOutline, helpBuoy, arrowBackSharp, eye, documentLockOutline, eyeOff, person, logIn, fingerPrintOutline, logoGoogle, logoFacebook,
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
      top: 32%;
      margin: 15px 0 0 20px;
      transform: translateY(-90%);
      width: 90%;
    }
    #container a {
      text-decoration: none;
    }
  </style>
  