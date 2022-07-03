import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";

type _handler = () => void;
const AuthWatcher = (truthyHandler: _handler, falsyHandler: _handler) => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  return onAuthStateChanged(auth, (user) => {
    if (user) {
      truthyHandler();
    } else {
      falsyHandler();
    }
  });
};

export default AuthWatcher;
