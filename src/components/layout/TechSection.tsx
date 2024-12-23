import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { HiOutlineCode } from "react-icons/hi";
import TechCard from "../ui/TechCard";
import { techItems } from "@/utils/utils";

function TechSection() {
  return (
    <SectionContainer>
      <SectionHeader title="تکنولوژی ها" icon={<HiOutlineCode />} />
      <p className=" text-center py-2 text-sky-700 font-medium text-lg -mt-12 mb-8 max-lg:-mt-8 max-lg:mb-4 max-sm:-mt-4 max-sm:mb-2 max-sm:text-sm">
        ما از جدیدترین نرم افزارها و ابزارهای هوش مصنوعی و تحلیل داده استفاده می
        کنیم تا خدماتی کارآمد و دقیق ارائه دهیم
      </p>
      <div className="container max-w-7xl flex flex-col max-sm:mb-6 max-md:mb-8 max-lg:mb-10">
        {techItems.map((item, index) => (
          <TechCard
            key={item.id}
            num={index + 1}
            title={item.title}
            photo={item.photo}
            description={item.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default TechSection;
