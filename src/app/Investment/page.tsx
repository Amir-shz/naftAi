import Image from "next/image";
import vector from "@/../public/investment.svg";
import InvestmentForm from "@/components/ui/InvestmentForm";

function Page() {
  return (
    <div className=" flex justify-center gap-8 my-8 container max-md:flex-col-reverse max-md:gap-2 max-md:my-4 px-4 max-sm:px-2">
      <div className="basis-1/2 rounded-lg shadow-md border p-8 max-md:p-6 max-sm:p-4">
        <h3 className=" text-sky-600 text-xl font-black max-sm:text-lg">
          دعوت به همکاری:
        </h3>
        <p className=" font-semibold text-neutral-600 mt-2 max-sm:text-sm">
          ما از سرمایه‌گذاران علاقه‌مند به مشارکت در آینده صنعت نفت و بهره‌مندی
          از فرصت‌های بی‌نظیر هوش مصنوعی، دعوت می‌کنیم تا با ما در تماس باشند.
          ما آماده ارائه اطلاعات بیشتر در مورد شرکت، راهکارها و برنامه‌های
          توسعه‌ای خود هستیم.
        </p>
        <div className=" rounded-md shadow border py-3 my-3 px-6 max-sm:px-3">
          <h4 className=" text-center font-bold text-sky-500">
            راه های ارتباطی
          </h4>
          <div className=" text-neutral-600 mt-2 [&>div]:grid [&>div]:grid-cols-[1fr_2fr] [&>div]:gap-2 [&>div>div:last-child]:text-end font-semibold ">
            <div>
              <div>تلفن تماس:</div>
              <div>۰۹۱۳۲۳۴۵۶۷۸</div>
            </div>
            <div>
              <div>ایمیل:</div>
              <div>example@gmail.com</div>
            </div>
            <div>
              <div>وب سایت:</div>
              <div>naft-ai.com</div>
            </div>
          </div>
        </div>
        <InvestmentForm />
      </div>
      <div className="basis-1/2 flex justify-center items-center rounded-lg shadow-md border p-8 max-md:border-none max-md:shadow-none max-md:p-0">
        <Image src={vector} alt="investment" className=" max-md:size-2/3" />
      </div>
    </div>
  );
}

export default Page;
