<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Help">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container">
        <form  @submit.prevent="validate">
          <ion-list lines="full">
            <div class="space"></div>
            <div class="space"></div>            
            <ion-row>
              <ion-col>
                <ion-item style="border: 1px solid black !important;">
                  <ion-input v-model="data.title" type="text" placeholder="Awesome Input"></ion-input>
                </ion-item>
              </ion-col>
            </ion-row>  
            <ion-row>
              <ion-col>
                <ion-item style="border: 1px solid black !important;">
                  <ion-textarea v-model="data.description" rows="10" maxLength="500"  placeholder="Write description here..." :clear-on-edit="true"></ion-textarea>
                </ion-item>
              </ion-col>
            </ion-row>   
            <div class="space"></div>
            <div class="space"></div>  
            <div class="space"></div>
            <div class="space"></div>  
            <div class="space"></div>
            <div class="space"></div>  
            <div class="space"></div>
            <div class="space"></div>          
            <ion-row>
              <ion-col>
                <ion-button type="submit" color="light" shape="round" expand="full">Send</ion-button>
              </ion-col>
            </ion-row>                     
          </ion-list>          
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
            showPass:false,
            showPassA:false,
            data: {
                title:"",
                description:"",
                email:"",
            }
        }
    },
    methods: {
      validate () {
          var msj = "Please wait..."
          if (this.data.title === "") {
            msj = "Please, the full title field must not be empty."
            this.showLoading(msj, false); 
            return 0;
          }
          if (this.data.description === "") {
              msj = "Please the full title field must not be empty."
              this.showLoading(msj, false);
              return 0;
          }    
          this.showLoading(msj, false);          
          setTimeout(() => {
            this.form();
          }, 2000);
      },       
      form () {
        var msj = "Data send successfully..."
        this.data.title = ""
        this.data.description = ""
        this.showLoading(msj, false);  
        console.log(this.data);             
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
        callOutline,mailOutline, eye, eyeOff, arrowBackSharp, lockClosed, personOutline,
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
    left: 5%;
    margin: -25px 0 0 0;
    width: 90%;
  }
</style>
