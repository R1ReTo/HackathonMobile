// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,

 firebaseConfig: {

  apiKey: "AIzaSyCSZ_9lCPVznTGELMFDTn12b_89SdN_ths",

  authDomain: "hackathonmobile-bfd52.firebaseapp.com",

  databaseURL: "https://hackathonmobile-bfd52-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "hackathonmobile-bfd52",

  storageBucket: "hackathonmobile-bfd52.appspot.com",

  messagingSenderId: "801424206007",

  appId: "1:801424206007:web:4ddac074d8a6b3aa0d4532",

  measurementId: "G-ZFXDR68HBJ"

}

};
// Initialize Firebase

//const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
