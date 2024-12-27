import { aiLabSections } from "@/utils/utils";
import Image from "next/image";

function Page(): React.ReactNode {
  return (
    <section className="my-10 mx-auto max-w-6xl max-md:my-4">
      <div className="shadow-md rounded-md max-sm:px-3 p-4 max-md:p-3 border mx-4">
        <h2 className="text-2xl font-bold text-sky-600 text-center mb-2 max-sm:text-xl max-sm:mb-2">
          بخش آزمایشگاه هوش نفت
        </h2>
        <p className="text-sky-600 text-center text-lg font-bold leading-relaxed max-sm:text-base mb-6">
          راهکارهای پیشرفته برای بهینه‌سازی، تحلیل داده‌ها و بهبود عملکرد
          پالایشگاه‌ها
        </p>
        {aiLabSections.map((section) => (
          <div
            key={section.id}
            className="pb-8 mb-8 border-b-2 last:border-none last:mb-0 last:pb-4 grid grid-cols-2 gap-4 max-lg:grid-cols-1"
          >
            <div>
              <h3 className=" text-xl font-semibold text-sky-700 mb-2">
                {section.title}
              </h3>
              <div className=" pr-8 max-sm:pr-4">
                <p className=" font-medium">{section.description}</p>
                <h4 className=" font-semibold text-lg my-2 text-sky-600">
                  کاربردها:
                </h4>
                <ul className=" list-disc list-inside pr-4">
                  {section.applications.map((app, idx) => (
                    <li key={idx} className=" font-medium my-1">
                      <span className="relative -right-2">{app}</span>
                    </li>
                  ))}
                </ul>
                <h4 className=" font-semibold text-lg my-2 text-sky-600">
                  ایده های جدید:
                </h4>
                <ul className=" list-disc list-inside pr-4">
                  {section.ideas.map((idea, idx) => (
                    <li key={idx} className=" font-medium my-1">
                      <span className="relative -right-2">{idea}</span>
                    </li>
                  ))}
                </ul>
                <h4 className=" font-semibold text-lg my-2 text-sky-600">
                  روند کار:
                </h4>
                <ul className=" list-decimal list-inside pr-4">
                  {section.steps.map((step, idx) => (
                    <li key={idx} className=" font-medium my-1">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" self-center">
              <Image
                src={section.picture}
                width={600}
                height={600}
                alt="llm"
                className=" object-cover rounded w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
