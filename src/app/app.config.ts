import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// إعداد Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth'; // استيراد المصادقة
import { getFirestore, provideFirestore } from '@angular/fire/firestore'; // استيراد Firestore
import { provideFirebaseApp } from '@angular/fire/app';

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeaWrk8qI1KvuZNPRwr3LzF7XThabvpGA",
  authDomain: "log-in-93736.firebaseapp.com",
  projectId: "log-in-93736",
  storageBucket: "log-in-93736.appspot.com",
  messagingSenderId: "206492163078",
  appId: "1:206492163078:web:d36e158d8d5bface68f787"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // تهيئة Firebase
    provideFirestore(() => getFirestore()), // إعداد Firestore
    provideAuth(() => getAuth()) // إعداد المصادقة
  ]
};
