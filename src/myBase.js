import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export default firebase.initializeApp(firebaseConfig);
// 전체 export하기 보단 auth 서비스만 export 가능!
// 전체를 export하면 auth가 필요할 떄마다 firebase.auth 호출해야 함

// export default 
export const authService = firebase.auth()