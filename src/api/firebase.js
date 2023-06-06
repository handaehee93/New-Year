
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get,remove} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

// 로그인 함수
  export async function login() {
    return signInWithPopup(auth, provider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      console.log(error)
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.customData.email;
      // const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  // 로그아웃 함수
  export async function logout() {
    return (
      signOut(auth)
        .then(() => { return null })
        .catch((error) => { })
  )}

// firebase의 onAuthStateChanged는 사용자가 로그인하거나 로그아웃 하거나 기존의 로그인 기록이 세션이 남아있을 때 호출 되고, 해당 User의 정보를 콜백함수의 인자로 받아오기 때문에 user정보로 뭘 하고 싶다면 콜백함수에서 해주면 된다.
  export function userStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
      const admin = user ? await adminUser(user) : null
      callback(admin)
    });
  }
  const database = getDatabase(app)

  // firebase의 데이터베이스에서  admins라는 키에 해당하는 데이터를 가져 와서, 그 안에 onAuthStateChanged에 전달 된 User의 uid가 들어 있다면 기존 User의 정보에 isAdmin true나 false를 추가 해서 리턴
  async function adminUser(user) {
    return get(ref(database, 'admins'))
      .then((snapshot) => {
        if(snapshot.exists()) {
          const admins = snapshot.val()
          const isAdmin = admins.includes(user.uid)
          return {...user, isAdmin}
        }
        return user;
    })
  }