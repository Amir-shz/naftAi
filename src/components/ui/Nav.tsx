"use client";

import { navItems } from "@/utils/utils";
import NavItem from "./NavItem";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import {
  HiOutlineCurrencyDollar,
  HiOutlineDatabase,
  HiOutlineDesktopComputer,
  HiOutlineHome,
  HiOutlineMenu,
} from "react-icons/hi";
import { navProps } from "@/utils/types";
import { useState } from "react";

function Nav({ children }: navProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav>
      <ul className="flex items-center gap-2 max-md:hidden">
        {navItems.map((item) => (
          <NavItem href={item.href} key={item.id}>
            {item.name}
          </NavItem>
        ))}
      </ul>
      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className=" md:hidden">
          <HiOutlineMenu className=" size-7 text-neutral-700" />
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerOverlay />
          <DrawerContent className=" w-3/4 h-dvh bg-neutral-50 [&>div:first-child]:hidden rounded-none">
            <DrawerHeader className="flex flex-col items-center justify-center -mt-8">
              <DrawerTitle>{children}</DrawerTitle>
              <DrawerDescription className=" -mt-8 font-semibold">
                پیشرو در هوش مصنوعی
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-2 space-y-2">
              {navItems.map((item) => (
                <div key={item.id} onClick={() => setIsOpen(false)}>
                  <NavItem
                    href={item.href}
                    icon={
                      (item.id === 1 && <HiOutlineHome />) ||
                      (item.id === 2 && <HiOutlineDatabase />) ||
                      (item.id === 3 && <HiOutlineDesktopComputer />) ||
                      (item.id === 4 && <HiOutlineCurrencyDollar />) ||
                      ""
                    }
                  >
                    {item.name}
                  </NavItem>
                </div>
              ))}
            </div>
            <DrawerFooter>
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </nav>
  );
}

export default Nav;
