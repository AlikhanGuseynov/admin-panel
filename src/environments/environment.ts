// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDRuu-i8rS1x3WUJ8PUzYr1MVCepSrt_EU',
    authDomain: 'test-panel-ebced.firebaseapp.com',
    projectId: 'test-panel-ebced',
    storageBucket: 'test-panel-ebced.appspot.com',
    messagingSenderId: '375059679184',
    appId: '1:375059679184:web:2baa10e0186982a70e5bd5'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


// service firebase.storage {
//   match /b/{bucket}/o {
//   match /{allPaths=**} {
//     allow read, write: if request.auth != null;
//   }
// }
// }
