import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGJlufkaCMirlSb8yeeBLJW2tViwT1C3E",
  authDomain: "portfolio-ee67c.firebaseapp.com",
  projectId: "portfolio-ee67c",
  storageBucket: "portfolio-ee67c.appspot.com",
  messagingSenderId: "1076108776324",
  appId: "1:1076108776324:web:9cc002bf6ce4820e40c3d1",
  measurementId: "G-P75T1RT3XD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
