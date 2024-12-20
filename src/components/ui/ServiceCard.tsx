import { serviceCardProps } from "@/utils/types";

function ServiceCard({ icon, title, text }: serviceCardProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden odd:bg-lime-50 even:bg-fuchsia-50 shadow-neutral-400/25 shadow-[0_1px_4px_0.5px] p-4  max-sm:p-3">
      <div className="[&>svg]:size-10 p-3 w-min rounded-full [&>svg]:text-sky-600 bg-sky-100">
        {icon}
      </div>
      <div className=" w-full px-2 pt-8">
        <h3 className="pb-2 text-xl font-semibold text-neutral-700">{title}</h3>
        <p className=" text-neutral-500 text-justify text-[15px] leading-6 font-medium max-sm:text-sm max-sm:leading-5">
          {text}
        </p>
      </div>
    </div>
  );
}

// function ServiceCard() {
//   return (
//     <div className="w-full rounded-lg shadow-[0_1px_4px_0.5px] shadow-neutral-400/25 odd:bg-lime-50 even:bg-fuchsia-50">
//       <div>illustration</div>
//       <div>title</div>
//       <div>description</div>
//     </div>
//   );
// }
export default ServiceCard;
