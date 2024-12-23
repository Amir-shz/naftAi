import { buttonProps } from "@/utils/types";
import Link from "next/link";

function Button({ href, withHover, type, children }: buttonProps) {
  return (
    <Link
      href={href}
      className={`
    ${
      withHover
        ? "bg-sky-600 hover:bg-sky-700 text-neutral-100 transition-all duration-200"
        : type === "primary"
        ? "bg-sky-600 text-neutral-100 "
        : type === "secondary"
        ? "bg-sky-50 hover:bg-blue-200 transition-all duration-300"
        : ""
    }
    inline-block text-xl font-semibold  px-8 py-2 rounded-md max-sm:px-4 max-sm:py-2 max-sm:text-base max-sm:rounded
    `}
    >
      {children}
    </Link>
  );
}

export default Button;
