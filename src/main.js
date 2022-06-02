import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc5tkGsWKNFnOOAoW8_uNu4okx2syGys4",
    authDomain: "sae-203-corentin-beuchat.firebaseapp.com",
    projectId: "sae-203-corentin-beuchat",
    storageBucket: "sae-203-corentin-beuchat.appspot.com",
    messagingSenderId: "677989910610",
    appId: "1:677989910610:web:777aa3e30b5fee96ecb78b"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
