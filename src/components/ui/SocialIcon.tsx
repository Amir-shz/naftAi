import { socialIconProps } from "@/utils/types";
import Link from "next/link";

function SocialIcon({
  size = "sm",
  href,
  children,
}: socialIconProps): React.ReactNode {
  return (
    <Link
      href={href}
      target="_blank"
      className={` transition-all duration-200 hover:bg-sky-600 [&>svg]:hover:fill-sky-50 [&>svg]:fill-[#737373] shadow-shadow3 bg-sky-50  flex justify-center items-center ${
        size === "sm" && "rounded-xl size-16 [&>svg]:size-8"
      } ${size === "lg" && " rounded-2xl size-20 [&>svg]:size-10"}`}
    >
      {children}
    </Link>
  );
}

export default SocialIcon;
