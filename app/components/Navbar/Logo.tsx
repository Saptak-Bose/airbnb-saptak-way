"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();

  return (
    <Image
      className="hidden cursor-pointer md:block"
      src="/images/logo.png"
      height={100}
      width={100}
      alt="Logo"
    />
  );
};

export default Logo;
