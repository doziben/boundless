import { NextPage } from "next";
import Head from "next/head";
import Wrapper from "../../components/ui/wrapper";
import tw from "twin.macro";
import AuthForm from "../../components/forms/authForm";

const Register: NextPage = () => {
  return (
    <>
      <Head>
        <title>Join Boundless | a new way to hire </title>
      </Head>
      <div tw="bg-[#fafafa] min-h-[100vh] w-full text-center">
        <Wrapper>
          <AuthForm type="register" />
        </Wrapper>
      </div>
    </>
  );
};

export default Register;
