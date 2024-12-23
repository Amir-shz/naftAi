import { sectionContainerProps } from "@/utils/types";

function SectionContainer({ children }: sectionContainerProps) {
  return (
    <section className="pt-8 pb-4 px-10 max-sm:px-4 max-sm:pt-6 container">
      {children}
    </section>
  );
}

export default SectionContainer;
