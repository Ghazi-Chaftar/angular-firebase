import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

import {getAuth, provideAuth} from "@angular/fire/auth"
import {provideFirebaseApp, initializeApp} from "@angular/fire/app"

const firebaseConfig = {
  apiKey: "AIzaSyAr6Rzu6ll8h9xAmd7HYLiD6jCb0397UnA",
  authDomain: "bi-project-cb158.firebaseapp.com",
  projectId: "bi-project-cb158",
  storageBucket: "bi-project-cb158.appspot.com",
  messagingSenderId: "745646460330",
  appId: "1:745646460330:web:37954d2761fc9a0af0afd3",
  measurementId: "G-EH9TWFQV9S"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(()=> initializeApp(firebaseConfig)),
      provideAuth(()=> getAuth())
    ])
  ],
 
};
