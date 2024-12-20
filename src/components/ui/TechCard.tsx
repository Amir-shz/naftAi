import { TechCardProps } from "@/utils/types";
import Image from "next/image";
import React from "react";
// import {
//   HiOutlineArrowCircleLeft,
//   HiOutlineArrowLeft,
//   HiOutlineChevronDoubleDown,
//   HiOutlineChevronDoubleLeft,
// } from "react-icons/hi";

function TechCard({
  photo,
  title,
  description,
}: TechCardProps): React.ReactNode {
  console.log(photo);
  return (
    <div className=" w-full flex justify-start max-md:flex-col max-md:items-center gap-4 max-md:gap-2 rounded-lg shadow-md bg-sky-50 p-3">
      <figure className=" flex-none rounded-sm overflow-hidden w-56 min-h-56 max-md:w-full max-md:h-56 hover:[&>img]:scale-110 ">
        <Image
          src={photo}
          alt={title}
          width={500}
          height={500}
          className="size-full rounded-sm object-cover transition-all duration-300"
        />
      </figure>
      <div className="max-sm:self-start mt-4 max-md:mt-2 flex flex-col gap-2 max-sm:gap-0 ">
        <h2 className="text-2xl max-sm:text-lg font-bold max-sm:font-semibold text-neutral-700">
          {title}
        </h2>
        <p className="text-neutral-500 text-justify pl-2 max-sm:text-sm max-sm:font-medium">
          {description}
        </p>
      </div>
      {/* <div className=" self-center bg-sky-500 p-3 [&>svg]:text-white rounded-full hover:bg-sky-600 transition-all duration-300 md:-translate-x-9 max-md:translate-y-9 [&>svg]:size-6 cursor-pointer">
        <HiOutlineChevronDoubleLeft className=" max-md:hidden" />
        <HiOutlineChevronDoubleDown className=" md:hidden" />
      </div> */}
    </div>
  );
}

export default TechCard;
