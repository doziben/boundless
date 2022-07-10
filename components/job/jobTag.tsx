import Link from "next/link";
import tw from "twin.macro";

interface _props {
  title: string;
}

const JobTag = (props: _props) => {
  return (
    <Link href={`/explore/?tag=${props.title}`} passHref>
      <a tw="p-2 bg-[#fafafa] hover:(bg-blue-100)">{props.title}</a>
    </Link>
  );
};

export default JobTag;
