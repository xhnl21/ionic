<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- <ion-button size="small" color="light">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292" class="ionicon-fill-none"></path></svg>
        </ion-button> -->
        <!-- <ion-icon ref="iconsx" id="eye"></ion-icon> -->
        <!-- <ion-icon onload="getIcons('mailOutline')"></ion-icon> -->
        <!-- <ion-icon :src="icon('mailOutline')"></ion-icon> -->
        <!-- <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon> -->
        <!-- <div id="list"></div> -->        
        <ion-title text-center style="text-align: center;">Log In</ion-title>
        <ion-buttons slot="end">
          <ion-button router-link="/Biometric">
            <ion-icon :ios="fingerPrintOutline" :md="fingerPrintOutline"></ion-icon>
          </ion-button>          
        </ion-buttons> 
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container" style="position: relative;">
        <form @submit.prevent="validate">
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-item>
                  <ion-label position="stacked">Enter Email Address / Mobile Number</ion-label>
                  <ion-input fill="outline" type="email" required v-model="data.email">
                    <ion-icon :ios="person" :md="person" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
                  </ion-input>   
                </ion-item>   
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <ion-item v-if="showPass === false">
                  <ion-label position="stacked">Enter Password</ion-label> 
                    <ion-input fill="outline" type="password" required v-model="data.pass">
                      <ion-icon :ios="lockClosed" :md="lockClosed" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
                    </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPassword">
                      <ion-icon :ios="eye" :md="eye"></ion-icon>
                    </ion-button>
                  </ion-buttons>
                </ion-item>  
                <ion-item v-else>
                  <ion-label position="stacked">Enter Password</ion-label> 
                  <ion-input fill="outline" type="text" required v-model="data.pass">
                    <ion-icon :ios="lockClosed" :md="lockClosed" item-start class="text-primary"></ion-icon>&nbsp;&nbsp;
                  </ion-input> 
                  <ion-buttons slot="end">
                    <ion-button @click="showPassword">
                      <ion-icon :ios="eyeOff" :md="eyeOff"></ion-icon> 
                    </ion-button>
                  </ion-buttons>
                </ion-item>                     
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col style="text-align: right;">
                  <ion-label router-link="/Forgot" class="btnLinkFP">Forgot Password?</ion-label>
              </ion-col>
            </ion-row>   
            <ion-row>
              <ion-col>
                <ion-button type="submit" color="light" expand="full" shape="round">
                  <ion-icon :ios="logIn" :md="logIn" slot="start" item-start class="text-primary"></ion-icon>
                  Log In
                </ion-button>   
              </ion-col>
            </ion-row>  
            <ion-row>
              <ion-col>
                <div style="text-align: center;">OR</div>  
              </ion-col>
            </ion-row>   
            <ion-row>
              <ion-col>
                <ion-button color="danger" expand="full" shape="round">              
                  <ion-icon :ios="logoGoogle" :md="logoGoogle"></ion-icon> 
                  &nbsp;&nbsp; Sign In with Google
                </ion-button>
              </ion-col>
            </ion-row>    
            <ion-row>
              <ion-col>
                <ion-button color="primary" expand="full" shape="round">
                  <ion-icon :ios="logoFacebook" :md="logoFacebook"></ion-icon> 
                  &nbsp;&nbsp;Sign In with Facebook
                </ion-button>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col style="text-align: center;">
                  <ion-label>New User?</ion-label>
                  <ion-label router-link="/Register" class="btnLink">Sing Up</ion-label>
              </ion-col>
            </ion-row>          
          </ion-grid>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { loadingController, alertController } from '@ionic/vue';
import { arrowBackSharp, eye, eyeOff, lockClosed, logIn, person, fingerPrintOutline, logoGoogle, logoFacebook } from 'ionicons/icons';
// import { onMounted } from "vue"
// import { ref } from "vue"
export default {
  data () {
      return {
          showPass:false,
          data: {
              email:"miautobox@miautobox.com",
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
//     onMounted(() => {
//       // const id = iconsx.value.$el.id
//       // const icons = window.icons;
//       // const change = icons[id].replace('data:image/svg+xml;utf8,', '');
//       console.log(iconsx);
//       // document.getElementById(id).setAttribute(":src", icons[id]);

//       // var listItem = document.getElementById("list");
//       // var listButton = document.createElement('button');
//       // listButton.setAttribute("class","ion-item");
//       // listButton.setAttribute("id", id);

//       // const ionIconClose = document.createElement('ion-icon'); 
//       // ionIconClose.setAttribute('slot', 'icon-only');
//       // ionIconClose.setAttribute('name', 'close'); 
//       // listItem.appendChild(ionIconClose);
//       // listItem.appendChild(ionIconClose);
//       // var icon = document.createElement("ion-icon");
//       // icon.setAttribute("class","md");
//       // var text = document.createTextNode("Add");
//       // listButton.appendChild(text);
//       // listButton.appendChild(icon);
//       // listItem.appendChild(listButton);


//       // console.log(change);
//       // console.log(iconsx.value.$el);

//       // document.getElementById(id).setAttribute(":ios", change);
//       // document.getElementById(id).setAttribute(":md", change);
      
  
//       // const ionicon = document.createElement("ion-icon");
// //       var html = "";
// //       html=+'<ion-icon role="img" class="md">';
// //         html=+'<div class="icon-inner">';
// //           html=+change;
// //         html=+'</div>';
// //       html=+'</ion-icon>';
// // console.log(html);
//       // const d = document.getElementById(id);
//       // d.parentNode.removeChild(d);

//     });
    return {
      // iconsx,
      arrowBackSharp, eye, lockClosed, eyeOff, person, logIn, fingerPrintOutline, logoGoogle, logoFacebook,
      showLoading,
    }
  }
};
// console.log(window.icons);

// icon(name) {
//   // console.log(this.i[name]);
//   // return ":ios="+this.i[name]+" :md="+this.i[name];
//   return  window.icons[name];
// }
// function getIcons(icon: any): string {
//     const icons = window.icons;
//     return ":ios="+icons[icon]+" :md="+icons[icon];
// }
// export default {

// };

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
    transform: translateY(-50%);
    width: 90%;
  }
  #container a {
    text-decoration: none;
  }
</style>
