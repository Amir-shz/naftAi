import Image from "next/image";
import Button from "../ui/Button";
import photo from "@/../public/naftBG.jpg";
function HeroSection() {
  return (
    <section className=" relative bg-heroSection h-dvh bg-cover -translate-y-16 -mx-6 max-sm:-mx-4 -mb-16 text-justify after:content-['*'] after:absolute after:top-0 after:left-0 after:size-full after:bg-heroSection">
      <Image
        src={photo}
        placeholder="blur"
        priority={true}
        alt="Oil refinery"
        className=" absolute object-cover object-top size-full"
      />
      <div className="flex flex-col gap-2 items-start relative top-1/2 max-sm:top-[40%] -translate-y-1/2 px-16 max-sm:px-4 z-10">
        <h2 className="font-bold bg-neutral-500/40 rounded-md backdrop-blur-md inline-block py-4 px-8 max-sm:px-4 max-sm:py-2 text-neutral-100 text-4xl max-sm:text-xl">
          تحول صنعت نفت با هوش مصنوعی و فناوری های پیشرفته
        </h2>
        <p className=" font-normal text-neutral-100 backdrop-blur-md inline-block py-3 px-6 max-sm:px-3 bg-neutral-500/40 max-sm:text-sm max-sm:w-4/5 max-sm:py-2">
          کاهش هزینه ها، افزایش بهره وری و حفظ محیط زیست با تکنولوژی های ما
        </p>
        <div className=" self-end mt-16 max-sm:mt-8 flex gap-2">
          <Button href="/infra" type="secondary" withHover={false}>
            زیرساخت
          </Button>
          <Button href="/Investment" type="primary" withHover={true}>
            سرمایه گذاری
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
