"use client";
import { serviceCardProps } from "@/utils/types";
import Image from "next/image";
import { motion } from "motion/react";

function ServiceCard({ photo, title, text }: serviceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex bg-gradient-to-br from-sky-50 to-sky-300 rounded-md items-center w-[90%] shadow-md max-lg:flex-col max-lg:w-full max-lg:justify-center"
    >
      <Image
        src={photo}
        width={512}
        height={512}
        alt="person"
        className="h-4/5 w-2/6 translate-x-12 rounded-lg object-cover flex-none shadow-[0px_0px_16px_1px_rgba(0,0,0,0.4)] max-lg:translate-x-0 max-lg:-translate-y-1/2 max-lg:w-2/3 max-lg:h-3/6 max-sm:w-2/3 max-sm:h-56  max-sm:aspect-square max-sm:-translate-y-[45%]"
      />
      <div className=" self-start py-8 px-4 -mr-4 max-lg:mr-0 max-lg:-mt-28">
        <h2 className=" text-xl font-bold text-neutral-700 mb-4">{title}</h2>
        <p className=" text-base font-medium text-neutral-500">{text}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
