import Image from "next/image";
import vector from "@/../public/investment.svg";

function InvestmentVector() {
  return (
    <div className="basis-1/2 flex justify-center items-center rounded-lg shadow-md border p-8 max-md:border-none max-md:shadow-none max-md:p-0">
      <Image src={vector} alt="investment" className=" max-md:size-2/3" />
    </div>
  );
}

export default InvestmentVector;
