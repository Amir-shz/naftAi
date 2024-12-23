import Image from "next/image";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";

function FeaturedSection() {
  return (
    <div className="-mb-4">
      <p className=" text-center text-sky-600 font-bold text-sm mb-12">
        شرکت هایی که در کار خود از هوش مصنوعی استفاده کرده اند
      </p>
      <div className="flex [&>img]:grayscale [&>img]:opacity-70 gap-9 [&>img]:h-24 overflow-x-scroll px-8 no-scrollbar">
        <Image
          src="/as featured/Aramco.png"
          width={200}
          height={200}
          alt="oil industry company"
        />
        <Image
          src="/as featured/bp.png"
          width={200}
          height={200}
          alt="oil industry company"
        />
        <Image
          src="/as featured/Chevron.png"
          width={200}
          height={200}
          alt="oil industry company"
        />
        <Image
          src="/as featured/exxon.png"
          width={200}
          height={200}
          alt="oil industry company"
        />
        <Image
          src="/as featured/Shell.png"
          width={200}
          height={200}
          alt="oil industry company"
        />
        <Image
          src="/as featured/totalenergies.png"
          width={200}
          height={200}
          alt="oil industry company"
        />
      </div>
      <div className=" flex items-center justify-center text-sm text-sky-700 font-semibold mt-6 xl:hidden">
        <HiMiniArrowSmallRight className=" size-5" />
        <p>اسکرول افقی کنید</p>
        <HiMiniArrowSmallLeft className=" size-5" />
      </div>
    </div>
  );
}

export default FeaturedSection;
