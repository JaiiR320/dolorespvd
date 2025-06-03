"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reserve", label: "Reserve" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-20 w-full flex-row items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/top-left-logo.png"
            alt="Dolores PVD"
            width={212.5}
            height={85}
          />
        </Link>
      </div>
      <div className="text-dolores flex items-center gap-4 text-base lg:gap-8 lg:text-xl">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "font-bold" : ""}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
