<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-button>   
        </ion-buttons>
        <ion-title text-center style="text-align: center;">MiAutoBox</ion-title>
        <ion-buttons slot="end" >
          <ion-button @click="develoment">
            <ion-icon :ios="searchOutline" :md="searchOutline"></ion-icon>
          </ion-button>
          <ion-button @click="develoment">
            <ion-icon :ios="notificationsOutline" :md="notificationsOutline"></ion-icon>
          </ion-button>
          <ion-button @click="develoment">
            <ion-icon :ios="cartOutline" :md="cartOutline"></ion-icon>
          </ion-button>                    
        </ion-buttons>         
      </ion-toolbar>
    </ion-header>    
    <ion-content class="no-scroll">
      <ion-card  style="position: absolute;margin-top: -60px;">
        <img alt="Silhouette of mountains" :src="img" />
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { loadingController, alertController } from '@ionic/vue';
import { searchOutline, notificationsOutline, cartOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {},
    data () {
        return {
            img:process.env.BASE_URL+"assets/tutorial/h.jpg",
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
        this.showLoading("demo", false);                
        setTimeout(() => {
          this.form();
        }, 2000);
      }, 
      form () {
          console.log("demoA");
      }, 
      develoment () {
          this.showLoading("This option is under development", false);   
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
        showLoading,
        searchOutline, notificationsOutline, cartOutline,
      };
    },
});
</script>

<style scoped>
img {
  max-height: none !important;
}
  .space {
    height: 25px;
  }
  .no-scroll {
    --overflow: hidden;
  }
</style>
