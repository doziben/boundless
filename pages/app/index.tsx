import { NextPage } from "next";
import { useRouter } from "next/router";
import headerCtx from "../../utils/headerCtx";
import { useContext } from "react";
import AuthWatcher from "../../utils/authWatcher";
import Wrapper from "../../components/ui/wrapper";
import tw from "twin.macro";

const App: NextPage = () => {
  const router = useRouter();
  const hCtx = useContext(headerCtx);

  AuthWatcher(
    () => {
      hCtx.setIsLoggedIn(true);
      // Callfunction to get userdata, set userauth to true
      // ...
    },
    () => {
      router.push("/");
    }
  );

  return (
    <div tw="bg-[#fafafa] min-h-[100vh] w-full">
      {/* if auth isn't true, showloading state */}
      <Wrapper>App</Wrapper>
    </div>
  );
};

export default App;
