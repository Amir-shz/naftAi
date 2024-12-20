import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { HiOutlineBriefcase } from "react-icons/hi";
import ServiceCard from "../ui/ServiceCard";

function ServicesSection() {
  return (
    <SectionContainer>
      <SectionHeader title="خدمات" icon={<HiOutlineBriefcase />} />
      <div className="grid grid-cols-4 justify-items-center gap-6 max-sm:grid-cols-1 max-lg:grid-cols-2">
        <ServiceCard
          icon={<HiOutlineBriefcase />}
          title="بهینه سازی استخراج و پالایش"
          text="مدل های یادگیری ماشین ما، فرآیندهای استخراج و پالایش را تحلیل کرده و پیشنهادات بهینه
ارائه می دهند."
        />
        <ServiceCard
          icon={<HiOutlineBriefcase />}
          title="نظارت بر تجهیزات با اینترنت اشیاء (IoT)"
          text="با سیستمهای هوشمند، خرابی های پیشبینی نشده را کاهش داده و کارایی تجهیزات را افزایش
دهید"
        />
        <ServiceCard
          icon={<HiOutlineBriefcase />}
          title="سیستم های مدیریت انرژی"
          text="با استفاده از داد ههای پیشرفته، مصرف انرژی را مدیریت و بهر هوری را به حداکثر
برسانید"
        />
        <ServiceCard
          icon={<HiOutlineBriefcase />}
          title="تحلیل داده های مشتریان"
          text="تحلیل دقیق داده ها برای بهبود استراتژ ی ها و کاهش هزینه ها"
        />
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
