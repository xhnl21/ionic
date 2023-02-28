<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Help">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">About</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <form  @submit.prevent="validate">
          <ion-list lines="full">
            <div class="space"></div>          
            <ion-row>
              <ion-col>
                  <p class="justify">
                    ¡Bienvenido a nuestra aplicación de mantenimiento de vehículo! Somos una empresa dedicada a proporcionar a nuestros 
                    usuarios una manera fácil y eficiente de mantener sus vehículos en óptimas condiciones.
                  </p>
                  <p class="justify">
                    Nuestra aplicación es una herramienta imprescindible para cualquier persona que desee mantener su vehículo en perfecto estado. 
                    Ya sea que seas un conductor experimentado o un principiante en el mundo del mantenimiento de vehículos, nuestra aplicación te 
                    ayudará a recordar cuándo es el momento adecuado para realizar el mantenimiento de tu vehículo y te proporcionará recomendaciones 
                    personalizadas según el modelo y marca de tu automóvil.
                  </p>                    
                  <p class="justify">
                    Con nuestra aplicación, no tendrás que preocuparte por perder el registro de mantenimiento de tu vehículo o por olvidar cuándo 
                    es el momento de realizar un servicio. Te recordaremos cuándo es el momento adecuado para realizar el mantenimiento de tu vehículo 
                    y te proporcionaremos consejos útiles para mantenerlo en las mejores condiciones.
                  </p> 
                  <p class="justify">
                    En resumen, nuestra aplicación de mantenimiento de vehículo es la herramienta perfecta para mantener tu vehículo en perfectas 
                    condiciones y prolongar su vida útil. Descárgala ahora y disfruta de una experiencia de mantenimiento de vehículo más fácil y eficiente.
                  </p> 
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
  .justify{
    text-align: justify;
  }
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
