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
        <ion-title>Log In</ion-title>
        <!-- <ion-icon :ios="arrowBackSharp" :md="arrowBackSharp"></ion-icon> -->
        <!-- <div id="list"></div> -->
        <ion-buttons slot="end" router-link="/Biometric">
          <ion-icon :ios="fingerPrintOutline" :md="fingerPrintOutline"></ion-icon>
        </ion-buttons> 
      </ion-toolbar>
    </ion-header>
    <ion-content class="no-scroll">
      <div id="container" style="position: relative;">
        <form @submit.prevent="form">
          <ion-list>
            <ion-item>
              <ion-label position="stacked">Enter Email Address / Mobile Number</ion-label>
              <ion-input fill="outline" type="email" required v-model="data.email"></ion-input>
            </ion-item>
          </ion-list>
          <ion-list>
            <ion-item> 
              <ion-label position="stacked">Enter Password</ion-label> 
              <ion-input fill="outline" type="password" required v-model="data.pass" v-if="showPass === false">                
                <ion-button color="light" style="right: 1px; position: fixed;" @click="showPassword">                  
                  <ion-icon :ios="eye" :md="eye"></ion-icon> 
                </ion-button>
              </ion-input> 
              <ion-input fill="outline" type="text" required v-model="data.passA" v-else>                
                <ion-button color="light" style="right: 1px; position: fixed;" @click="showPassword">                  
                  <ion-icon :ios="eye" :md="eye"></ion-icon> 
                </ion-button>
              </ion-input>               
            </ion-item>
          </ion-list>
          <ion-list style="text-align: right;">
            <ion-button router-link="/Forgot" class="btnLinkFP">Forgot Password?</ion-button>  
          </ion-list>   
          <div class="space"></div>
          <ion-item>
            <ion-checkbox slot="start" expand="full" required v-model="data.privacity"></ion-checkbox>
            <ion-label>
              <p style="font-size: 10px;">
                By Login in you agree to our Terms & Condition and <br> Privaticy Policy 
              </p>              
            </ion-label>
          </ion-item>
          <div class="space"></div>
          <ion-list>
            <ion-button type="submit" color="light" expand="full">Log In</ion-button>
          </ion-list>  
          <div class="space"></div>        
          <ion-list>
            <div style="text-align: center;">OR</div>
          </ion-list>
          <div class="space"></div>
          <ion-list>
            <ion-button color="danger" expand="full">              
              <ion-icon :ios="logoGoogle" :md="logoGoogle"></ion-icon> 
              Sign In with Google
            </ion-button>
          </ion-list>          
          <ion-list>
            <ion-button color="primary" expand="full">
              <ion-icon :ios="logoFacebook" :md="logoFacebook"></ion-icon> 
              Sign In with Facebook
            </ion-button>
          </ion-list>  
          <div class="space"></div>
          <ion-list style="text-align: center;">
            <ion-label>New User?</ion-label>
            <ion-button router-link="/Register" class="btnLink">Sing Up</ion-button>  
          </ion-list>          
        </form>
        <ion-alert
          :is-open="pWait"
          message="Please wait..."
          @didDismiss="plaseWait(false)"
        >
        </ion-alert>
        <ion-alert
          :is-open="priv"
          message="Please you must accept the terms and conditions."
          :buttons="['OK']"
          @didDismiss="privacitys(false)"
        >
        </ion-alert>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { arrowBackSharp, eye, fingerPrintOutline, logoGoogle, logoFacebook } from 'ionicons/icons';
// import { onMounted } from "vue"
import { ref } from "vue"
export default {
  data () {
      return {
          showPass:false,
          data: {
              email:"xhnl21@gmail.com",
              pass:"123456789",
              passA:"",
              privacity:false,
          }
      }
  },
  methods: {
    form () {
      console.log(this.data);
      if (this.data.privacity === false) {
        this.privacitys(true);
      } else {
        this.plaseWait(true);
        this.$router.push('/Welcome');
      }      
    },
    showPassword () {
      if (this.showPass === false) {
        this.data.passA = this.data.pass;
        this.showPass = true;
      } else {
        this.showPass = false;
      }
    },
  },
  setup() {
    // const iconsx = ref(null)
    const pWait = ref(false);
    const plaseWait = (state) => (pWait.value = state);
    const priv = ref(false);
    const privacitys = (state) => (priv.value = state);
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
      arrowBackSharp, eye, fingerPrintOutline, logoGoogle, logoFacebook,
      pWait, plaseWait,
      priv, privacitys
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
  }
  .space {
    height: 25px;
  }
  #container {
    position: absolute;
    top: 45%;
    /* left: 10%; */
    /* margin: -25px 0 0 -25px; */
    margin: 15px 0 0 20px;
    transform: translateY(-50%);
    width: 90%;
  }
  #container a {
    text-decoration: none;
  }
</style>
