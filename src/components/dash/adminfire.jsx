





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
    updateDoc,
    doc,
    snapshotEqual,
    onSnapshot,
    orderBy,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyC7fK-Qicd3TGsW1vrmhOsym1Qdr2ubIlA",
    authDomain: "mintt-a6d9b.firebaseapp.com",
    projectId: "mintt-a6d9b",
    storageBucket: "mintt-a6d9b.appspot.com",
    messagingSenderId: "337833134768",
    appId: "1:337833134768:web:621e2f3844f67900cec975"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase();

const permitReport = async (evntid) => {
    try {

        const washingtonRef = doc(db, "Events", evntid);
        await updateDoc(washingtonRef, {
            approval: "true",

        });
        console.log("Document successfully updated!");


    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const fetchdata = async () => {
    try {

        const [allTasks, setAllTasks] = useState([]);



  useEffect(() => {



    const colRef = collection(db, 'Events');
    getDocs(colRef)
    // const q = query(colRef, where("approval", "==", "false"));
    const q = query(colRef , orderBy("date", "desc"), );

    onSnapshot(q, (snapshot) => {
      const tasks = [];
      snapshot.forEach((doc) => {
        tasks.push({
          id: doc.id,
          ...doc.data()

        });
        
      });
      
      let count = Object.keys(tasks).length

      console.log(count)

      setAllTasks(tasks);
    })
    


  }, []);

    }
    catch (err) {
        console.error(err);
        alert(err.message);
    }
};

export {
    permitReport,
    fetchdata,

};
