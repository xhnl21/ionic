<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Help">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">Terms & Conditions</ion-title>
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
                      1.	Uso de la aplicación: Al utilizar nuestra aplicación, aceptas cumplir con estos términos y condiciones. 
                      Si no estás de acuerdo con ellos, no uses la aplicación.
                  </p>
                  <p class="justify">
                      2.	Información personal: Al registrarte en nuestra aplicación, proporcionarás información personal, como tu nombre, 
                      dirección de correo electrónico y número de teléfono. Esta información se utilizará para proporcionarte nuestros servicios y 
                      para informarte sobre actualizaciones de la aplicación.
                  </p>                    
                  <p class="justify">
                      3.	Privacidad: Tu privacidad es importante para nosotros. No compartiremos tu información personal con terceros sin tu consentimiento.
                  </p> 
                  <p class="justify">
                      4.	Responsabilidad: No nos hacemos responsables de los daños causados por el mal uso de nuestra aplicación. Es tu responsabilidad 
                      asegurarte de que tu vehículo esté en buen estado y de seguir las recomendaciones de mantenimiento que te proporcionamos.
                  </p> 
                  <p class="justify">
                      5.	Actualizaciones: Es posible que actualicemos nuestra aplicación de vez en cuando para mejorar la experiencia del usuario. 
                      Al aceptar estos términos y condiciones, aceptas recibir estas actualizaciones.
                  </p> 
                  <p class="justify">
                      6.	Propiedad intelectual: Todos los derechos de propiedad intelectual de nuestra aplicación son de nuestra propiedad. 
                      No se permite la reproducción o distribución de la aplicación sin nuestro consentimiento previo por escrito.
                  </p>                     
                  <p class="justify">
                    7.	Modificaciones de los términos y condiciones: Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                    Si lo hacemos, te informaremos de los cambios a través de la aplicación o por correo electrónico.permite la reproducción o distribución de 
                    la aplicación sin nuestro consentimiento previo por escrito.
                  </p>
                  <p class="justify">
                      Al utilizar nuestra aplicación de mantenimiento de vehículo, aceptas estos términos y condiciones en su totalidad. 
                      Si tienes alguna pregunta, contáctanos a través de nuestra página de contacto en la aplicación.
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
