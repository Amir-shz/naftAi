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
      <div className=" flex flex-col gap-4">
        {techItems.map((item) => (
          <TechCard
            key={item.id}
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
