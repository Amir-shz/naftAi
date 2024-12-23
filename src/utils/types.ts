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

export interface sectionHeaderProps {
  title: string;
  icon: React.ReactNode;
}

export interface sectionContainerProps {
  children: React.ReactNode;
}

export interface serviceCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface TechCardProps {
  num: number;
  photo: string;
  title: string;
  description: string;
}

export interface socialIconProps {
  size: "sm" | "lg";
  href: string;
  children: React.ReactNode;
}

export interface testimonialItemProps {
  photo: string;
  text: string;
  person: string;
}
