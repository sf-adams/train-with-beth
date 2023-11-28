"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type Props = {};

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Products", href: "/Products" },
  { name: "Contact", href: "/Contact" },
];

export default function Navbar({}: Props) {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="mx-auto flex items-center max-w-2xl justify-between lg:max-w-7xl">
        <h1 className="text-4xl font-bold">
          <Link href="/">
            Train With <span className="text-primary">Beth</span>
          </Link>
        </h1>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={clsx(
                "text-lg font-semibold",
                link.href === pathname
                  ? "text-primary"
                  : "text-gray-600 transition duration-200 hover:text-primary",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="divide-x border-r sm:border-l">
          <Button
            variant="outline"
            className="flex h-12 w-12 flex-col gap-y-1.5 rounded-none sm:h-20 sm:w-20 md:h-24 md:w-24"
          >
            <ShoppingCart className="" />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
