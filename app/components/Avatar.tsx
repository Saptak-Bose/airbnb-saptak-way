"use client";
import React from "react";
import Image from "next/image";

type Props = {};

const Avatar = (props: Props) => {
  return (
    <Image
      className="rounded-full"
      src="/images/placeholder.jpg"
      height={30}
      width={30}
      alt="Avatar"
    />
  );
};

export default Avatar;
