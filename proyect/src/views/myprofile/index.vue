<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Settings">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">My Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container">
        <form  @submit.prevent="validate" v-bind:style="{ height: height }">
          <ion-grid>
            <div class="space"></div>            
            <ion-avatar style="margin: auto; width:100px; height:100px;">
              <img :src="ImgProfile"  />              
            </ion-avatar>
            <div class="space"></div>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">Full Name</ion-label>
                  <ion-input type="text" v-model="data.fname" ref="fname">
                  <ion-icon :ios="personOutline" :md="personOutline" slot="start"></ion-icon>&nbsp;&nbsp;</ion-input>
                </ion-item>
              </ion-col>
            </ion-row>            
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">Mobile Number</ion-label>
                  <ion-input type="text" v-model="data.tlf">
                  <ion-icon :ios="callOutline" :md="callOutline" slot="start"></ion-icon>&nbsp;&nbsp;</ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">Email Address</ion-label>
                  <ion-input type="text" v-model="data.email">
                  <ion-icon :ios="mailOutline" :md="mailOutline" slot="start"></ion-icon>&nbsp;&nbsp;</ion-input>
                </ion-item>
              </ion-col>
            </ion-row>
            <div class="space"></div>   
            <ion-row>
              <ion-col>
                <ion-button color="light" shape="round" expand="full" @click="changePassword">
                  <ion-icon slot="start" :ios="lockClosed" :md="lockClosed"></ion-icon> 
                  <ion-label>Change Password</ion-label>  
                </ion-button>
              </ion-col>
            </ion-row>                      
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>   
            <div class="space"></div>       
            <ion-row class="indicatorsBtn">
              <ion-col>
                <ion-button type="submit" color="light" shape="round" expand="full">Update</ion-button>
              </ion-col>
              <ion-col>
                <ion-button router-link="/Settings" color="light" shape="round" expand="full">Cancel</ion-button>
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
import { callOutline, mailOutline, eye, eyeOff, arrowBackSharp, lockClosed, personOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
export default defineComponent({
    components: { },
    data () {
        return {
            height: window.innerHeight+"px",
            showPass:false,
            showPassA:false,
            data: {
                fname:"",
                email:"",
                tlf:"",
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
            msj = "Please Enter Email Address."
            this.showLoading(msj, false);  
            return 0;
          } 
          if (this.data.tlf === "") {
            msj = "Please Enter Mobile Number."
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
        this.data.fname = ""
        this.data.email = ""
        this.data.tlf = ""
        var msj = "data successfully saved"
        this.showLoading(msj, false);   
      },  
      changePassword () {
        this.$router.push('/Changepass');
      },         
    },
    setup() {
      const ImgProfile = process.env.BASE_URL+"assets/tutorial/a.jpg";
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
        callOutline,mailOutline, eye, eyeOff, arrowBackSharp, lockClosed, personOutline,
        ImgProfile, showLoading
      };
    },
});
</script>

<style scoped>
  .indicatorsBtn {
      margin: auto;
      width: 100%;
      justify-content: center;
      position: absolute;
      bottom: 100px;
      display: flex;
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
    top: 5%;
    /* transform: translateY(-50%); */
    width: 80%;
  }
</style>
