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
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { HiOutlineMenu } from "react-icons/hi";
import { navProps } from "@/utils/types";

function Nav({ children }: navProps) {
  return (
    <nav>
      <ul className="flex items-center gap-2 max-md:hidden">
        {navItems.map((item) => (
          <NavItem href={item.href} key={item.id}>
            {item.name}
          </NavItem>
        ))}
      </ul>
      <Drawer>
        <DrawerTrigger className=" md:hidden bg-sky-100 p-2 rounded-full">
          <HiOutlineMenu className=" size-6 text-sky-600" />
        </DrawerTrigger>
        <DrawerContent className=" bg-sky-50 [&>div:first-child]:hidden">
          <DrawerHeader className="flex flex-col items-center justify-center -mt-8">
            <DrawerTitle>{children}</DrawerTitle>
            <DrawerDescription className=" -mt-8">
              پیشرو در هوش مصنوعی
            </DrawerDescription>
          </DrawerHeader>
          <div className=" px-2 space-y-2">
            {navItems.map((item) => (
              <NavItem href={item.href} key={item.id}>
                {item.name}
              </NavItem>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}

export default Nav;
