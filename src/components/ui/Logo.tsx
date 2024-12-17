import { modak } from "@/app/layout";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className={` ${modak.className} text-3xl tracking-widest p-2`}
    >
      <p>
        naft
        <span className=" text-sky-500">.ai</span>
      </p>
    </Link>
  );
}

export default Logo;
