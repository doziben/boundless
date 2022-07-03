import tw from "twin.macro";

type _props = {
  children: React.ReactNode;
};

const Wrapper = (props: _props) => {
  return (
    <main>
      <section tw="max-w-7xl px-[6%] mx-auto">{props.children}</section>
    </main>
  );
};

export default Wrapper;
