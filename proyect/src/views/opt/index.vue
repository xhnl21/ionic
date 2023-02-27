<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">          
          <ion-button router-link="/Login">
            <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon>
          </ion-button>
        </ion-buttons> 
        <ion-title text-center style="text-align: center;">Enter OPT</ion-title>        
        <ion-buttons slot="end" color="light">
          <ion-button router-link="/Welcome">Skip</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container">
        <form @submit.prevent="form">
          <ion-grid>
            <div class="space"></div>
            <div class="space"></div>
            <ion-row>
              <ion-col>
                <small style="text-align: center;">
                  Please enter one time password which you have received at your resqistered email address / mobile number.
                </small>
              </ion-col>
            </ion-row>
            <div class="space"></div>
            <div class="space"></div>
            <ion-row>
              <ion-col>
                <ion-input type="text" v-model="data.a" class="borderInput"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input type="text" v-model="data.b" class="borderInput"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input type="text" v-model="data.c" class="borderInput"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input type="text" v-model="data.d" class="borderInput"></ion-input>
              </ion-col>              
            </ion-row>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>     
            <ion-row>
              <ion-col>
                <ion-button type="submit" color="light" expand="full" shape="round">Verify Code</ion-button>
              </ion-col>
            </ion-row> 
            <ion-row> 
              <ion-col>
                <ion-button type="submit" color="light" expand="full" shape="round">Resend Code</ion-button>
              </ion-col>
            </ion-row>        
          </ion-grid>
        </form>
      </div>
      <ion-alert
        :is-open="pWait"
        message="Please wait..."
        @didDismiss="plaseWait(false)"
      >
      </ion-alert>
      <ion-alert
        :is-open="nPass"
        message="Please Check your email."
        :buttons="['OK']"
        @didDismiss="newPass(false)"
      >
      </ion-alert> 
      <ion-alert
        :is-open="erroE"
        message="Please Enter Number OPT."
        :buttons="['OK']"
        @didDismiss="erroOPT(false)"
      >
      </ion-alert>      
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { arrowBackSharp } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {},
    data () {
        return {
            message:"",
            data: {
                a:"",
                b:"",
                c:"",
                d:""
            }
        }
    },
    methods: {
      form () {
        console.log(this.data); 
        if (this.data.a !== "") {
          this.$router.push('/Restpass');          
        } else {
          this.erroOPT(true);
        }
      },
    },
    setup() {
      const pWait = ref(false);
      const plaseWait = (state: any) => (pWait.value = state);
      const nPass = ref(false);
      const newPass = (state: any) => (nPass.value = state);
      const erroE = ref(false);
      const erroOPT = (state: any) => (erroE.value = state);        
      return {
        arrowBackSharp,
        pWait, plaseWait,
        erroE, erroOPT,
        nPass, newPass
      };
    },
});
</script>

<style scoped>
  .borderInput{
    border: 1px solid;
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
    width: 80%;
  }
</style>
