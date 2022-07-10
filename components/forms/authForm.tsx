import logo from "../../public/SVGs/Boundless.svg";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
import FacebookIcon from "../icons/facebookIcon";
import AppleIcon from "../icons/appleIcon";
import GoogleIcon from "../icons/googleIcon";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase/firebaseConfig";
import { useRouter } from "next/router";
import useAppDispatch from "../../hooks/useAppDispatch";
import { appActions } from "../../utils/appSlice";
import AuthWatcher from "../../utils/authWatcher";

type _props = {
  type: "login" | "register";
};

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthForm = (props: _props) => {
  let login = props.type === "login";
  let register = props.type === "register";
  const router = useRouter();
  const dispatch = useAppDispatch();

  const googleAuth = (e: React.MouseEvent) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userRegDate = new Date(user.metadata.creationTime!);
        const currentDate = new Date();

        const newUser = userRegDate === currentDate;
        dispatch(
          appActions.setUser({
            email: user.email,
            name: user.displayName,
            photoUrl: user.photoURL,
            uid: user.uid,
            newUser: newUser,
          })
        );

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential && credential.accessToken;

        router.push("/app");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  AuthWatcher(
    () => {
      //set loading state
      router.push("/app");
    },
    () => {}
  );

  return (
    <section tw="pt-20">
      <Link href="/" passHref>
        <a>
          <Image src={logo} alt="Boundless Logo" />
        </a>
      </Link>
      <div tw="w-full flex justify-center">
        <div tw="bg-white p-12 rounded-lg mt-10 shadow-xl max-w-[558px]">
          <h1 tw="text-4xl font-bold mb-8 md:(text-5xl)">
            {register && "Create your,"}
            {login && "Access your,"} <br />
            <span tw="text-transparent bg-clip-text bg-gradient-to-r from-[#7A17C9] to-[#DD4C32]">
              Account
            </span>
          </h1>

          <div tw="w-full flex gap-4 mb-8 justify-center">
            <button>
              <FacebookIcon />
            </button>
            <button>
              <AppleIcon />
            </button>
            <button onClick={googleAuth}>
              <GoogleIcon />
            </button>
          </div>

          {register && (
            <p>
              Have an account?
              <span>
                <Link href="/auth/login" passHref>
                  <a tw="font-bold text-blue-500 hover:(underline)">Login</a>
                </Link>
              </span>
            </p>
          )}
          {login && (
            <p>
              Don&apos;t have an account?
              <span>
                <Link href="/auth/register" passHref>
                  <a tw="font-bold text-blue-500 hover:(underline)">Register</a>
                </Link>
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
