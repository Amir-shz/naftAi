import Button from "@/components/ui/Button";
import photo from "@/../public/notFound.svg";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-[calc(100dvh-64px)] flex justify-center items-center">
      <div className="flex max-md:flex-col max-sm:-mt-40 max-md:-mt-20 gap-10">
        <div>
          <Image
            src={photo}
            alt="not found illustration"
            className=" max-sm:size-96"
          />
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h2 className=" text-sky-600 font-semibold text-3xl text-center mb-8">
            صفحه موردنظر یافت نشد
          </h2>
          <Button href="/" type="primary" withHover={false}>
            بازگشت به خانه
          </Button>
        </div>
      </div>
    </div>
  );
}
