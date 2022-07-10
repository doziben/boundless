import AuthWatcher from "./authWatcher";
import useAppDispatch from "../hooks/useAppDispatch";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { appActions } from "./appSlice";
import React, { useEffect } from "react";

//Watches the global state to make sure user data is loaded
//when the app is refreshed

interface _props {
  children: React.ReactNode;
}

const StateWatcher = (props: _props) => {
  const auth = getAuth(app);

  const dispatch = useAppDispatch();

  useEffect(() => {
    AuthWatcher(
      () => {
        const user = auth.currentUser!;
        const userRegDate = new Date(user.metadata.creationTime!);
        const currentDate = new Date();

        const newUser = userRegDate === currentDate;

        dispatch(
          appActions.setUser({
            email: user?.email,
            name: user?.displayName,
            photoUrl: user?.photoURL,
            uid: user?.uid,
            newUser: newUser,
          })
        );
      },
      () => {}
    );
  });

  return <>{props.children}</>;
};

export default StateWatcher;
