import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAutentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAutentication;
