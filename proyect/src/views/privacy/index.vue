<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/Help">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">Privacy</ion-title>
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
                    En nuestra aplicación de mantenimiento de vehículo, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. 
                    A continuación, te explicamos cómo recopilamos, usamos y protegemos tu información:
                  </p>
                  <p class="justify">
                    Recopilación de información: Al registrarte en nuestra aplicación, te pediremos información personal, como tu nombre, 
                    dirección de correo electrónico y número de teléfono. También recopilamos información sobre tu vehículo, como la marca, modelo y año.
                  </p>                    
                  <p class="justify">
                    Uso de la información: Utilizamos la información recopilada para proporcionarte nuestros servicios, como recordatorios de mantenimiento 
                    y recomendaciones personalizadas. También podemos utilizar la información para mejorar nuestros servicios y para enviar actualizaciones de la aplicación.
                  </p> 
                  <p class="justify">
                    Compartir información: No compartimos tu información personal con terceros sin tu consentimiento. La información recopilada solo se
                    comparte con nuestro equipo de soporte técnico y con los proveedores de servicios que trabajan en nuestro nombre.
                  </p> 
                  <p class="justify">
                    Seguridad de la información: Tomamos medidas para proteger tu información personal de la pérdida, el uso no autorizado y la divulgación. 
                    Utilizamos tecnologías de seguridad de la información para proteger la información recopilada.
                  </p> 
                  <p class="justify">
                    Acceso y corrección de información: Si deseas acceder a la información que tenemos sobre ti o corregir algún dato erróneo,
                    por favor contáctanos a través de nuestra página de contacto en la aplicación.
                  </p>                     
                  <p class="justify">
                    Cambios en la política de privacidad: Podemos actualizar nuestra política de privacidad de vez en cuando. Si lo hacemos, 
                    te informaremos a través de la aplicación o por correo electrónico.
                  </p>
                  <p class="justify">
                    En resumen, nos tomamos muy en serio la privacidad de tus datos personales y nos comprometemos a protegerlos. Si tienes alguna pregunta o 
                    inquietud sobre nuestra política de privacidad, por favor contáctanos a través de nuestra página de contacto en la aplicación.
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
