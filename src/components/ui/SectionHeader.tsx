import { sectionHeaderProps } from "@/utils/types";

function SectionHeader({ title, icon }: sectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 max-sm:gap-2 [&>svg]:size-10 [&>svg]:text-sky-600 max-sm:[&>svg]:size-8 mb-16 max-sm:mb-6 max-lg:mb-8">
      {icon}
      <h2 className=" max-sm:text-xl text-3xl font-bold text-neutral-600">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
