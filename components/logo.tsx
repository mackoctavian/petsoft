import Image from "next/image";
import React from "react";
import logo from "../public/images/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="petsoft logo" />
    </Link>
  );
}
