"use client";

import { testimonialItemProps } from "@/utils/types";
import Image from "next/image";
import { motion } from "motion/react";

function TestimonialItem({ photo, text, person }: testimonialItemProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image
        src={photo}
        width={512}
        height={512}
        alt="photo of customer Dave Bryson"
        className=" aspect-square  w-16 mb-3 rounded-full object-cover object-top"
      />
      <blockquote className="mb-4 text-lg font-medium">{text}</blockquote>
      <p className=" text-base text-neutral-400 font-semibold">
        &mdash; {person}
      </p>
    </motion.figure>
  );
}

export default TestimonialItem;
