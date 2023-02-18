<script setup>
//  https://www.youtube.com/watch?v=qMFytZ-JI9g
// https://yobaji.github.io/vue3-google-login/#custom-button-as-slot
// import { onMounted } from "vue"
// import { googleLogout, googleOneTap, googleAuthCodeLogin, googleTokenLogin } from "vue3-google-login"
import { googleSdkLoaded } from "vue3-google-login"
// const login = () => {
//   googleAuthCodeLogin().then((response) => {
//     console.log("Handle the response", response)
//   })
// }
// const login = () => {
//   googleTokenLogin().then((response) => {
//     console.log("Handle the response", response)
//   })
// }
// onMounted(() => {
//   googleOneTap({ autoLogin: true })
//     .then((response) => {
//       // This promise is resolved when user selects an account from the the One Tap prompt
//       console.log("Handle the response", response)
//     })
//     .catch((error) => {
//       console.log("Handle the error", error)
//     })
// })
const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2.initCodeClient({
      client_id: '64349569579-ebh4v58m5i1v7f15t82b5p1b61grqdca.apps.googleusercontent.com',
      // secret_client: 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
      scope: 'email profile openid',
      prompt: 'consent',
      fetch_basic_profile:true,
      callback: (response) => {
        console.log("Handle the response", response)
        console.log("Handle the userData")
      }
    }).requestCode()
  })
}
const onSignIn = (googleUser) => {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
const yourLogoutFunction = () => {
  // your logout logics
  // googleLogout()
  googleSdkLoaded((google) => {
    google.accounts.id.revoke("xhnl21@gmail.com")
  })
}

// const callback = (response) => {
//   console.log("Handle the response", response)
// }
</script>
<template>
  <!-- <div>One-Tap prompt will be shown once this component is mounted</div> -->
  <!-- <GoogleLogin :callback="callback"/> -->
  <br><br>
  <button @click="login">Login Using Google</button><br>
  <button @click="yourLogoutFunction">Logout</button><br>
  <div class="g-signin2" data-onsuccess="onSignIn"></div>
</template>
