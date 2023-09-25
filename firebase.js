import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAZJ7aLG2y_JE1HwduEQCHb6_2D0njWEns",
  authDomain: "fir-test-prosjekt-9998e.firebaseapp.com",
  projectId: "fir-test-prosjekt-9998e",
  storageBucket: "fir-test-prosjekt-9998e.appspot.com",
  messagingSenderId: "597075351471",
  appId: "1:597075351471:web:f6efc28673f6175cc3415a",
  measurementId: "G-EBGWSQ99TZ"
};

const app = initializeApp(firebaseConfig);

export default app;