import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get} from "firebase/database";
import { v4 as uuid} from 'uuid'

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
      const user = result.user;
    }).catch((error) => {
      console.log(error)
    });
  }

  // 로그아웃 함수
  export async function logout() {
    return (
      signOut(auth)
        .then(() => { return null })
        .catch((error) => { })
  )}

// 사용자의 state 변경 사항에 대한 함수
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


  // firebase에 새로운 제품을 등록하는 함수
  // 제품을 등록할 때 제품마다 고유한 id가 필요하므로 uuid 사용
  // firebase에 데이터를 등록할 때는 set을 사용 
  // product에 id를 추가해 주고, price를 받는 input의 value를 콘솔에 찍어 보면 string으로 나오므로 이걸 정수로 변환해 준다.
  // options는 ,로 구분 되어 입력 받을 것이므로 split을 통해 ,로 구분되어 있는 것들을 배열로 저장을 해 준다.
  export async function addNewProduct(product, imageURL) {
    const id = uuid()
    set(ref(database, `products/${id}`), {
      ...product,
      id,
      price: parseInt(product.price),
      image: imageURL,
      options: product.options.split(','),
      category: product.category
    })
  }


// firebase에 저장된 상품 데이터를 불러오는 함수
    export async function getProducts () {
      return get(ref(database, 'products'))
        .then(snapshot => {
          if(snapshot.exists()) {
            return Object.values(snapshot.val())
          }
          return []
        })
    }