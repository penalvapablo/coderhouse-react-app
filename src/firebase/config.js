import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNxs0HKe_oEvQoPcnDoSOMVeR6JrCM5SE',
  authDomain: 'coderreact-45eef.firebaseapp.com',
  projectId: 'coderreact-45eef',
  storageBucket: 'coderreact-45eef.appspot.com',
  messagingSenderId: '35547148353',
  appId: '1:35547148353:web:f16449cd4a0d34f0a796c0',
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  return firebase.firestore(app);
};
