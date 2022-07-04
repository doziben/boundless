import tw from "twin.macro";
import Image from "next/image";
import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { useRouter } from "next/router";
import headerCtx from "../../utils/headerCtx";
//tap into appslice and read data

const AccountWidget = () => {
  const hCtx = useContext(headerCtx);
  const router = useRouter();
  const displayName = "Solomon";
  const avatar =
    "https://lh3.googleusercontent.com/a-/AOh14Giz2HPunaqdFHAG6gWJJMc6Q9H6zwE50VRjHzX8trs=s96-c";

  const StyledDiv = tw.div`flex flex-col gap-0 justify-start`;
  const auth = getAuth(app);

  const signOutHandler = (e: React.MouseEvent) => {
    signOut(auth)
      .then(() => {
        hCtx.setIsLoggedIn(false);

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
