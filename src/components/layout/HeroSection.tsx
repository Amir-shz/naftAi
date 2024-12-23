"use client";

import Image from "next/image";
import Button from "../ui/Button";
import photo from "@/../public/hero.png";
import {
  HiArrowTrendingUp,
  HiOutlineBanknotes,
  HiOutlineGlobeAsiaAustralia,
} from "react-icons/hi2";

import { motion } from "motion/react";

function HeroSection() {
  return (
    <section className=" bg-blue-100 px-8 pt-16 pb-28 max-md:pt-8 max-sm:pt-2 max-md:px-4 max-md:pb-16  ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-w-screen-xl mx-auto max-md:gap-8"
      >
        <div>
          <h2 className=" text-[44px] font-black leading-normal text-neutral-700 max-md:text-center max-md:text-3xl max-md:leading-relaxed">
            چشم انداز هوش مصنوعی در صنعت نفت
          </h2>
          <p className=" leading-relaxed text-[20px] text-neutral-500 font-semibold mt-8 max-md:text-center max-md:mt-4 max-md:text-base">
            صنعت نفت با بهره‌گیری از هوش مصنوعی، گامی بزرگ به سوی آینده‌ای
            پایدار برمی‌دارد. الگوریتم‌های پیشرفته ما، نه تنها هزینه‌های عملیاتی
            را به شدت کاهش می‌دهند و بهره‌وری را افزایش می‌دهند، بلکه با
            بهینه‌سازی فرآیندها و کاهش اثرات زیست محیطی، سهم بزرگی در حفظ سیاره
            زمین ایفا می‌کنند. با ما همراه شوید تا آینده‌ای روشن‌تر و پایدارتر
            برای صنعت انرژی رقم بزنیم.
          </p>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className=" mt-12 flex gap-4 items-start max-md:block max-md:mx-auto max-md:w-fit max-md:[&>a:first-child]:mx-2 max-md:mt-6"
          >
            <Button href="/investment" withHover={true} type="primary">
              سرمایه گذاری
            </Button>
            <Button href="/infra" withHover={false} type="secondary">
              زیرساخت
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.25 }}
            className=" mt-8 w-full flex flex-wrap gap-8 [&_svg]:text-sky-500 [&_svg]:size-6  [&_p]:font-semibold [&_p]:text-sky-800 [&_p]:text-sm max-md:justify-between max-md:gap-4 max-md:mt-4"
          >
            <div className=" flex gap-1 items-center">
              <HiArrowTrendingUp />
              <p>افزایش بهره وری</p>
            </div>
            <div className=" flex gap-1 items-center">
              <HiOutlineBanknotes />
              <p>کاهش هزینه ها</p>
            </div>
            <div className=" flex gap-1 items-center">
              <HiOutlineGlobeAsiaAustralia />
              <p>حفظ محیط زیست</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="max-sm:mx-0 max-md:mx-6 max-lg:mx-10 xl:mr-12 self-center"
        >
          <Image
            src={photo}
            priority
            alt="oil"
            className=" object-cover w-full max-h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
