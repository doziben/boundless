import tw, { TwStyle } from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";

type _props = {
  children: React.ReactNode;
  href: string;
};

const DashLink = (props: _props) => {
  const router = useRouter();
  const path = router.pathname;
  const active = path.includes(props.href);

  return (
    <Link href={props.href} passHref>
      {active ? (
        <a tw="font-bold p-2 text-pry rounded-2xl bg-[#fafafa]">
          {props.children}
        </a>
      ) : (
        <a tw="font-bold p-2 text-sec hover:(text-pry rounded-2xl bg-[#fafafa])">
          {props.children}
        </a>
      )}
    </Link>
  );
};

export default DashLink;
