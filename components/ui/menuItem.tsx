import Link from "next/link";
import tw from "twin.macro";
interface _menuItemProps {
  title: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  icon?: JSX.Element;
}

const Flex = tw.div`flex gap-2 p-2 items-center hover:(bg-[#fafafa])`;

const MenuItem = (props: _menuItemProps) => {
  return (
    <>
      {props.href && (
        <Link href={props.href} passHref>
          <Flex>
            {props.icon}
            <a>{props.title}</a>
          </Flex>
        </Link>
      )}

      {props.onClick && (
        <button onClick={props.onClick}>
          <Flex>
            {props.icon}
            <p>{props.title}</p>
          </Flex>
        </button>
      )}
    </>
  );
};

export default MenuItem;
