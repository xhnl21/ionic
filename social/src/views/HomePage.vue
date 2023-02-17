<script setup>
import { googleSdkLoaded, googleLogout } from "vue3-google-login"
const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2.initCodeClient({
      client_id: '64349569579-ebh4v58m5i1v7f15t82b5p1b61grqdca.apps.googleusercontent.com',
      // secret_client: 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
      scope: 'email profile openid',
      callback: (response) => {
        console.log("Handle the response", response)
        console.log("Handle the response222",response.getBasicProfile())
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
  googleLogout((google) => {
    console.log(google);
  })
}
</script>

<template>
  <button @click="login">Login Using Google</button><br>
  <button @click="yourLogoutFunction">Logout</button><br>
  <div class="g-signin2" data-onsuccess="onSignIn"></div>
</template>