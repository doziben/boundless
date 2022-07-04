import tw from "twin.macro";
import Image from "next/image";
import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { useRouter } from "next/router";
import headerCtx from "../../utils/headerCtx";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { appActions } from "../../utils/appSlice";
//tap into appslice and read data

const AccountWidget = () => {
  const hCtx = useContext(headerCtx);
  const appStore = useAppSelector((store) => {
    return store.app;
  });
  const dispatch = useAppDispatch();

  const displayName = appStore.user!.name;
  const avatar = appStore.user!.photoUrl!;

  const StyledDiv = tw.div`flex flex-col gap-0 justify-start`;
  const auth = getAuth(app);

  const signOutHandler = (e: React.MouseEvent) => {
    signOut(auth)
      .then(() => {
        hCtx.setIsLoggedIn(false);
        dispatch(appActions.logOut());
        //setUser in appSlice to null
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div tw="flex gap-1">
      <div tw="rounded-full overflow-hidden w-[40px] h-[40px]">
        <Image
          src={avatar}
          loader={({ src }) => {
            return src;
          }}
          width="40px"
          height="40px"
          alt="boundless user"
        />
      </div>
      <StyledDiv>
        <p>{displayName}</p>
        <button onClick={signOutHandler} tw="text-xs text-blue-600 text-left">
          Sign Out
        </button>
      </StyledDiv>
    </div>
  );
};

export default AccountWidget;
