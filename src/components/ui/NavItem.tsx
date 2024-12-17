import { navItemProps } from "@/utils/types";
import Link from "next/link";

function NavItem({ href, icon = "", children }: navItemProps) {
  return (
    <li
      className={`rounded-lg hover:text-sky-600 transition-all duration-300 last:bg-sky-600 last:text-neutral-100 last:hover:text-neutral-100 font-medium max-md:bg-sky-100 max-md:flex max-md:rounded last:hover:bg-sky-700 max-md:last:bg-sky-100 max-md:last:text-neutral-700 max-md:last:hover:bg-sky-100 max-md:last:hover:text-neutral-700 `}
    >
      <Link
        href={href}
        className=" size-full px-4 py-1 inline-block max-md:py-2 max-md:px-2 max-md:flex max-md:items-center max-md:gap-2 max-md:text-neutral-700"
      >
        <div className="md:hidden p-2 bg-sky-200 rounded [&>svg]:size-7 [&>svg]:text-sky-600">
          {icon}
        </div>
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
