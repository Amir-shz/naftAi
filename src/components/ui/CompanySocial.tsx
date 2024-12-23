import Image from "next/image";

export default function CompanySocial() {
  return (
    <div className=" pt-2">
      <p className=" mb-4 text-lg font-semibold text-sky-600">
        مارا در شبکه های اجتماعی دنبال کنید
      </p>
      <div className=" flex items-center gap-6 max-sm:justify-center">
        <a
          href="https://google.com"
          target="_blank"
          className="max-md:size-[32px]"
        >
          <Image
            width={48}
            height={48}
            src="/social_Logos/X.svg"
            alt="X logo"
          />
        </a>
        <a
          href="https://google.com"
          className="relative size-12 rounded-[10px] bg-sky-700 max-md:size-[32px] "
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src="/social_Logos/telegram-fill.svg"
            alt="telegram logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:size-[20px]"
          />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          className="max-md:size-[32px]"
        >
          <Image
            width={48}
            height={48}
            src="/social_Logos/linkedin.svg"
            alt="linkedin logo"
          />
        </a>
        <a
          href="https://google.com"
          target="_blank"
          className="max-md:size-[32px]"
        >
          <Image
            width={48}
            height={48}
            src="/social_Logos/insta.svg"
            alt="instagram logo"
          />
        </a>
      </div>
    </div>
  );
}
