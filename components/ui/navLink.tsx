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
  const styles = {
    link: `${props.href === router.pathname && props.activeStyle}`,
  };

  return (
    <Link href={props.href} passHref>
      <a tw="p-1 font-bold text-sec">{props.children}</a>
    </Link>
  );
};

export default NavLink;
