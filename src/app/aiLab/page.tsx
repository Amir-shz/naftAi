import { aiLabSections } from "@/utils/utils";

function Page(): React.ReactNode {
  return (
    <div className="bg-neutral-100 text-neutral-700 min-h-screen">
      <header className="bg-sky-600 text-white py-10 text-center max-sm:py-5">
        <h1 className="text-4xl font-bold max-sm:text-2xl">
          بخش آزمایشگاه هوش نفت
        </h1>
        <p className="mt-4 text-lg max-sm:text-base">
          راهکارهای پیشرفته برای بهینه‌سازی، تحلیل داده‌ها و بهبود عملکرد
          پالایشگاه‌ها
        </p>
      </header>
      <main className="max-w-5xl mx-auto py-12 px-6 space-y-12 max-sm:py-6 max-sm:px-2">
        {aiLabSections.map((section, index) => (
          <section
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 max-sm:p-3"
          >
            <h2 className="text-2xl font-bold text-sky-600 max-sm:text-xl">
              {section.title}
            </h2>
            <p className="mt-4">{section.description}</p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-sky-500 max-sm:text-lg">
                کاربردها:
              </h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                {section.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-sky-500 max-sm:text-lg">
                ایده‌های جدید:
              </h3>
              <ul className="list-disc list-inside space-y-2 mt-2">
                {section.ideas.map((idea, idx) => (
                  <li key={idx}>{idea}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-sky-500  max-sm:text-lg">
                روند کار:
              </h3>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                {section.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Page;
