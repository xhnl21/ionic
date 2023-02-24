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
        <form @submit.prevent="validate">
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
                    <ion-input fill="outline" type="email" v-model="data.email">
                      <ion-icon :ios="person" :md="person" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
                    </ion-input> 
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
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { loadingController, alertController } from '@ionic/vue';
import { person, arrowBackSharp } from 'ionicons/icons';
import { defineComponent } from 'vue';
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
      validate () {
          var msj = "Please wait..."
          if (this.data.email === "") {
            msj = "Please Enter Email Address / Mobile Number."
            this.showLoading(msj, false);  
            return 0;
          }   
          this.showLoading(msj, false);          
          setTimeout(() => {
            this.form();
          }, 2000);
      },      
      form () {
        console.log(this.data);
        this.$router.push('/Restpass');  
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
        person, arrowBackSharp,
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
    top: 5%;
    /* transform: translateY(-50%); */
    width: 80%;
  }
</style>
