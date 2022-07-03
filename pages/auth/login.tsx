import { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../../components/ui/wrapper";
import AuthForm from "../../components/forms/authForm";
import tw from "twin.macro";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login to Boundless</title>
      </Head>

      <div tw="bg-[#fafafa] min-h-[100vh] w-full text-center">
        <Wrapper>
          <AuthForm type="login" />
        </Wrapper>
      </div>
    </>
  );
};

export default Login;
