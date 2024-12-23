import { navItemProps } from "@/utils/types";
import Link from "next/link";

function NavItem({ href, icon = "", children }: navItemProps) {
  return (
    <li
      className={`hover:text-sky-600 transition-all duration-300 font-bold max-md:bg-neutral-100 max-md:flex 
        md:last:bg-sky-600 md:last:rounded-sm md:last:text-sky-50 md:last:hover:text-sky-50 md:last:hover:bg-sky-700`}
    >
      <Link
        href={href}
        className=" size-full px-4 py-1 inline-block max-md:py-2 max-md:px-2 max-md:flex max-md:items-center max-md:gap-2 max-md:text-neutral-700"
      >
        <div className="md:hidden p-2 bg-sky-100 rounded-sm [&>svg]:size-6 [&>svg]:text-sky-700">
          {icon}
        </div>
        {children}
      </Link>
    </li>
  );
}

export default NavItem;
