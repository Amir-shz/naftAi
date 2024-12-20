import HeroSection from "@/components/layout/HeroSection";
import ServicesSection from "@/components/layout/ServicesSection";
import TechSection from "@/components/layout/TechSection";

export default function Page() {
  return (
    <div className=" flex flex-col gap-10">
      <HeroSection />
      <ServicesSection />
      <TechSection />
    </div>
  );
}
