import {
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

export default function CompanyInfo() {
  return (
    <div className=" flex flex-col gap-4 max-sm:self-start max-sm:text-base [&>div]:flex [&>div]:items-center [&>div]:justify-start [&>div]:gap-2 [&_p]:text-sky-600">
      <div>
        <HiOutlineLocationMarker />
        <p>نشانی: اصفهان - شهرک علمی تحقیقاتی</p>
      </div>
      <div>
        <HiOutlinePhone />
        <p>تلفن: ۰۳۱۱۲۳۴۵۶۷۸</p>
      </div>

      <div>
        <HiOutlineMail />
        <p>کد پستی: ۱۲۳۴۵۶۷۸۹۰</p>
      </div>
      <div>
        <HiOutlineGlobeAlt />
        <p>
          پست الکترونیکی: 
          <a href="">example@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
