type _props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const MenuButton = (props: _props) => {
  return (
    <button onClick={props.onClick}>
      <svg
        width="40"
        height="29"
        viewBox="0 0 40 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.5"
          width="40"
          height="28"
          rx="14"
          fill="#2A2A2A"
          fillOpacity="0.1"
        />
        <path
          d="M11 11H29M11 18H29"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
