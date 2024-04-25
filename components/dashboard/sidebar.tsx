"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { CompanyAvatar } from "./company-avatar";
import { Poppins } from "next/font/google";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CgMenuGridO } from "react-icons/cg";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SidebarTab } from "./sidebar-tab";
import { useParams, usePathname } from "next/navigation";
import { IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";

// interface DashboardSidebarProps {
//   company: string;
// }

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const fontThin = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export const DashboardSidebar = () => {
  const params = useParams<{ postid: string }>();

  const company = "Greeting";
  const pathname = usePathname();
  const [activePathState, setActivePathState] = useState(pathname);

  const handleClick = (path: string) => {
    setActivePathState(path);
  };

  return (
    <div className="flex flex-col h-screen w-72 bg-gray-200">
      <Popover>
        <PopoverTrigger asChild>
          <div className="p-2">
            <div className="p-2 gap-2 flex flex-row items-center w-full hover:bg-gray-300 rounded cursor-pointer select-none">
              <CompanyAvatar url="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              <span className={cn(font.className, "flex-grow")}>{company}</span>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Link href={"/login"}>Home</Link>
        </PopoverContent>
      </Popover>
      <ul>
        <li>
          <SidebarTab
            path={`/workspace/${params.postid}/openings`}
            clickHandler={handleClick}
            activePath={activePathState}
          >
            <CgMenuGridO />
            <span className={cn(fontThin.className, "flex-grow")}>Jobs</span>
          </SidebarTab>
        </li>
        <li>
          <SidebarTab
            path={`/workspace/${params.postid}/settings`}
            clickHandler={handleClick}
            activePath={activePathState}
          >
            <IoMdSettings />
            <span className={cn(fontThin.className, "flex-grow")}>
              Settings
            </span>
          </SidebarTab>
        </li>
      </ul>

      <ScrollArea></ScrollArea>
    </div>
  );
};
