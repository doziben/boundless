type _props = {
  children: React.ReactNode;
};

const Card = (props: _props) => {
  return (
    <div tw="bg-white p-12 rounded-lg mt-10 shadow-xl max-w-[558px]">
      {props.children}
    </div>
  );
};

export default Card;
