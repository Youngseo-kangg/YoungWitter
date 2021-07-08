import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCiwX3v_2pzIoYqwmgg6HUlQeZuBPa2BE",
    authDomain: "youngwitter.firebaseapp.com",
    projectId: "youngwitter",
    storageBucket: "youngwitter.appspot.com",
    messagingSenderId: "932935694793",
    appId: "1:932935694793:web:0f029fd7faa7421eefd018"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export default firebase.initializeApp(firebaseConfig);
// 전체 export하기 보단 auth 서비스만 export 가능!
// 전체를 export하면 auth가 필요할 떄마다 firebase.auth 호출해야 함

export const firebaseInstance = firebase;
// export default 
export const authService = firebase.auth()