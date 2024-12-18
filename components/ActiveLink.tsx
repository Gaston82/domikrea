"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps {
  path: string;
  text: string;
}

const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${pathName === path && "border-b-2 text-primary"}`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
