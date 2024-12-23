"use client";
import Image from "next/image";
import { motion } from "motion/react";

function TestimonialsGallery() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-3 gap-4 p-4 max-xl:grid-cols-2 max-lg:grid-cols-6 max-sm:grid-cols-4 max-sm:gap-2"
    >
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/10.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/3.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/2.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/4.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/5.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/8.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/6.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/9.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/7.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/11.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/1.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
      <figure className=" overflow-hidden">
        <Image
          src="/gallery/12.jpg"
          width={256}
          height={256}
          alt="ai in oil industry"
          className="w-full aspect-square object-cover block transition-all duration-300 hover:scale-110"
        />
      </figure>
    </motion.div>
  );
}

export default TestimonialsGallery;
