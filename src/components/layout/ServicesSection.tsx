import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import { HiOutlineBriefcase } from "react-icons/hi";
import ServiceCard from "../ui/ServiceCard";
import { services } from "@/utils/utils";

function ServicesSection() {
  return (
    <SectionContainer>
      <SectionHeader title="خدمات" icon={<HiOutlineBriefcase />} />
      <div className=" grid grid-cols-1 gap-6 justify-items-center max-lg:mt-40 max-lg:gap-36">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            photo={service.photo}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
