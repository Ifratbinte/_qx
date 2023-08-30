import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
interface Props {
  title: string;
}
const Redirect: React.FC<Props> = ({ title }) => {
  return (
    <Link href="/" className="flex items-center text-lg">
      {title} <FaLongArrowAltRight className="ml-3" />
    </Link>
  );
};

export default Redirect;
