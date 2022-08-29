
// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  snapshotEqual,
  onSnapshot,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  //hehe
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase();

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const q = query(collection(db, "users"), where("email", "==", email));
    const docs = await getDocs(q);
    return docs.docs[0].data().isAdmin;
  } catch (err) {
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const createEvent = async (name, venue, date, time, type, host, link) => {
  try {

    await addDoc(collection(db, "Events"), {


      name, venue, date, time, type, host, link,
      approval: "false",

    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const createMinutes = async (name, venue, date, time,  desp) => {
  try {

    await addDoc(collection(db, "Minutes"), {


      name, venue, date, time,  desp,
      

    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const createReport = async (name, venue, date, time, type, host, participants, ieeemembers, link, description) => {
  try {

    await addDoc(collection(db, "Reports"), {


      name, venue, date, time, type, host, participants, ieeemembers, link, description,


    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};






  



export {
  auth,
  db,
  database,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  createEvent,
  createReport,
  createMinutes,
  sendPasswordReset,
  logout,
  
  
  

};