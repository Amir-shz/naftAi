import { navItems } from "@/utils/utils";
import ScrollToUpBtn from "../ui/ScrollToUpBtn";
import Link from "next/link";
import Logo from "../ui/Logo";
import FooterSocials from "../ui/FooterSocials";

function Footer() {
  return (
    <footer className="bg-neutral-200 rounded-t-3xl">
      <div className=" container pt-4 px-8 max-sm:px-4">
        <div className=" flex justify-center pb-6 max-sm:pb-4">
          <ScrollToUpBtn />
        </div>
        <div className=" flex justify-between gap-4 max-md:flex-col-reverse">
          <div className=" basis-1/2 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className=" bg-sky-50 py-2 w-full rounded flex justify-center items-center font-semibold text-sky-600 max-sm:text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className=" basis-1/2 flex flex-col items-center">
            <div className="-mt-8">
              <Logo />
            </div>
            <div className="flex justify-evenly w-4/5 max-sm:w-full max-sm:justify-between max-sm:-mt-6">
              <FooterSocials />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-sky-50 mt-6">
        <p className=" text-center text-neutral-600 text-lg font-semibold py-3 max-sm:text-base">
          تمام حقوق این وب‌سایت متعلق به شرکت
          <span className=" text-sky-600"> آسا مهراز آریسا </span>
          است و هرگونه کپی‌برداری پیگرد قانونی دارد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
