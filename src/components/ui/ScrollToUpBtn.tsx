"use client";

import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function ScrollToUpBtn() {
  return (
    <button
      className="bg-sky-100 text-sky-600 rounded-full p-4 border-2 border-sky-600 [&>svg]:hover:scale-125"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <HiOutlineChevronDoubleUp className=" size-6 transition-all duration-300" />
    </button>
  );
}

export default ScrollToUpBtn;
