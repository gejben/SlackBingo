// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebaseConfig:{
    apiKey: "AIzaSyBmUEOHFUEER3cvFwvJwGVprdvcBpd8njY",
    authDomain: "slackbingo-1abe7.firebaseapp.com",
    databaseURL: "https://slackbingo-1abe7.firebaseio.com",
    projectId: "slackbingo-1abe7",
    storageBucket: "slackbingo-1abe7.appspot.com",
    messagingSenderId: "345828673089"
  }
};
