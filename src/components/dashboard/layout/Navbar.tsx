"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import useMediaQuery from "@/hooks/useResponsive";
import { useOpen } from "@/hooks/useOpen";
import { useForm, SubmitHandler } from "react-hook-form";
import { Redirect } from "@/lib/redirect";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SidebarMainLinks, SidebarSecondaryLinks } from "@/data/dashboard/sideBar.content";
import { usePathname } from "next/navigation";

interface Isearch {
  value: string;
}

const Navbar = () => {
  const { register, handleSubmit } = useForm<Isearch>();
  const { isXXs } = useMediaQuery();
  const { toggle } = useOpen();
  const currentpath = usePathname();

  const onSubmit: SubmitHandler<Isearch> = (data) => {
    const link = data.value.toLowerCase();
    if (link === "dashboard") return Redirect("/dashboard");
    return Redirect(`/dashboard/${link}`);
  };

  return (
    <nav className="flex justify-between overflow-y-hidden items-center h-16 bg-white text-black border-b border-b-gray-100 shadow-sm px-4 md:px-8">
      {/* Logo/Title */}
      <div 
        className="flex items-center cursor-pointer gap-2" 
        onClick={toggle}
      >
        <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <h1 className="text-xl font-bold text-primary">Ramy Analysis</h1>
      </div>

      {/* Centered Navigation */}
      {!isXXs && (
        <div className="flex-1 flex justify-center items-center">
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
        </div>
      )}

      {/* Right side elements */}
      {!isXXs && (
        <div className="flex items-center gap-6">
          <Popover>
            <PopoverTrigger>
              <Bell />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          
          <Link href={"/profil"} className="flex items-center">
            <Avatar className="mr-3">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/124599?v=4"
                alt="avatar"
                className="rounded-full"
              />
            </Avatar>
            <div>
              <h1 className="text-sm sm:text-md font-medium">Mr. Heddouche</h1>
              <p className="text-xs sm:text-sm text-fg font-medium">Admin</p>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
