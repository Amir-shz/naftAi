import React from "react";

export interface navItemProps {
  href: string;
  icon?: React.ReactNode | "";
  children: React.ReactNode;
}

export interface navProps {
  children: React.ReactNode;
}

export interface buttonProps {
  href: string;
  withHover: boolean;
  type: "primary" | "secondary";
  children: React.ReactNode;
}
