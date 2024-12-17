import { navItemProps } from "@/utils/types";
import Link from "next/link";

function NavItem({ href, children }: navItemProps) {
  return (
    <li
      className={`rounded-lg hover:text-sky-600 transition-all duration-300 last:bg-sky-600 last:text-neutral-100 last:hover:text-neutral-100 font-medium max-md:bg-sky-100 max-md:flex max-md:rounded last:hover:bg-sky-700 `}
    >
      <Link
        href={href}
        className=" size-full px-4 py-1 inline-block max-md:py-4"
      >
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
