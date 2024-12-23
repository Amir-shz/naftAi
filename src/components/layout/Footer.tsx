import CompanyInfo from "../ui/CompanyInfo";
import CompanySocial from "../ui/CompanySocial";

function Footer() {
  return (
    <footer className="  col-span-full flex h-72 flex-col justify-between bg-blue-100 px-16 pb-4 pt-8 max-xl:px-4 max-sm:h-full max-sm:gap-8 mt-8">
      <div className=" flex items-start justify-between max-sm:flex-col-reverse max-sm:items-center max-sm:gap-8 [&_svg]:size-6 [&_svg]:text-sky-600">
        <CompanyInfo />
        <CompanySocial />
      </div>

      <p className=" text-sm font-normal text-sky-600 max-sm:text-[13px] text-center">
        کلیه حقوق این سایت محفوظ و متعلق به شرکت
        <span className=" font-bold text-sky-700"> آسا پرداز آریسا </span>
        می‌باشد.
      </p>
    </footer>
  );
}

export default Footer;
