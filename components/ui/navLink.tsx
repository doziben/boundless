import tw, { TwStyle } from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";

type _props = {
  children: React.ReactNode;
  href: string;
  activeStyle?: string;
};

const NavLink = (props: _props) => {
  const router = useRouter();
  const active = props.href === router.pathname;

  return (
    <Link href={props.href} passHref>
      {active ? (
        <a tw="font-bold p-1 text-pry">{props.children}</a>
      ) : (
        <a tw="font-bold p-1 text-sec">{props.children}</a>
      )}
    </Link>
  );
};

export default NavLink;
