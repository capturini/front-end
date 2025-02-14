"use client";

import { Label } from "@/components/ui/label";
import {
  SidebarMainLinks,
  SidebarSecondaryLinks,
} from "@/data/dashboard/sideBar.content";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentpath = usePathname();

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Main Links */}
        <div className="flex items-center gap-6">
          {SidebarMainLinks.map((link, index) => (
            <Link
              href={link.href.startsWith("/") ? link.href : `/${link.href}`}
              key={index}
              className={`${
                currentpath === link.href && "text-purple"
              } transition-all duration-300 ease-in-out hover:bg-bg rounded-md flex items-center p-2`}
            >
              {link.icon}
              <span className="ml-2">{link.title}</span>
            </Link>
          ))}
        </div>

        {/* Secondary Links */}
        <div className="flex items-center gap-6">
          {SidebarSecondaryLinks.map((link, index) => (
            <Link
              href={link.href.startsWith("/") ? link.href : `/${link.href}`}
              key={index}
              className={`${
                currentpath === link.href && "text-purple"
              } hover:bg-bg rounded-md flex items-center p-2`}
            >
              {link.icon}
              <span className="ml-2">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
