import tw from "twin.macro";

interface _props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
  style: "primary" | "secondary";
  type?: "submit" | "reset";
}

const Button = (props: _props) => {
  return (
    <>
      {props.style === "primary" && (
        <button
          tw="px-8 py-3 bg-pry   text-white font-bold rounded-lg hover:(bg-[#454545])"
          onClick={props.onClick}
          type={props.type}
        >
          {props.children}
        </button>
      )}
      {props.style === "secondary" && (
        <button
          tw="px-8 py-3 bg-white  border border-sec text-pry font-bold rounded-lg hover:(bg-[#fafafa])"
          onClick={props.onClick}
          type={props.type}
        >
          {props.children}
        </button>
      )}
    </>
  );
};

export default Button;
