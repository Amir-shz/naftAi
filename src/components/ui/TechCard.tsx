"use client";
import { TechCardProps } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function TechCard({
  num,
  photo,
  title,
  description,
}: TechCardProps): React.ReactNode {
  return (
    <div className=" grid grid-cols-2 gap-6 items-center my-12 max-lg:grid-cols-1 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`${num % 2 === 0 && "lg:order-2"}`}
      >
        <p className=" mb-3 text-neutral-300 font-semibold text-8xl">{num}</p>
        <h3 className=" font-bold text-3xl text-neutral-700 mb-7 max-md:mb-4">
          {title}
        </h3>
        <p className=" text-base leading-7 font-medium text-neutral-600 max-lg:mb-14 max-sm:mb-6 max-sm:text-justify max-sm:px-1 ">
          {description}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=" "
      >
        <div className="flex justify-center items-center relative before:content-[''] before:block before:w-[70%] before:bg-sky-100 before:rounded-[50%] before:absolute before:-z-20 before:pb-[70%] after:content-[''] after:block after:w-[55%] after:pb-[55%] after:absolute after:-z-10 after:rounded-[50%] after:bg-sky-200 max-lg:before:w-[75%] max-lg:before:pb-[75%] max-lg:after:w-[60%] max-lg:after:pb-[60%] max-lg:translate-y-8 max-sm:translate-y-8 max-md:translate-y-4 ">
          <Image
            src={photo}
            width={500}
            height={500}
            alt={title}
            className="w-[45%] max-lg:w-[45%]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default TechCard;
