"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { CompanyAvatar } from "./company-avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CgMenuGridR } from "react-icons/cg";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SidebarTab } from "./sidebar-tab";
import { useParams, usePathname } from "next/navigation";
import { IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
import { ModeToggle } from "../util/mode-toggle";

export const DashboardSidebar = () => {
  const params = useParams<{ postid: string }>();

  const company = "Greeting";
  const pathname = usePathname();
  const [activePathState, setActivePathState] = useState(pathname);

  const handleClick = (path: string) => {
    setActivePathState(path);
  };

  return (
    <div className="flex flex-col h-screen min-w-72 font-semibold shadow-[inset_-7px_0_9px_-7px_rgba(0,0,0,0.2)] dark:shadow-[inset_-7px_0_9px_-7px_rgba(0,0,0,1)] bg-gray-200 dark:bg-gray-900">
      <Popover>
        <div className="p-2">
          <PopoverTrigger asChild>
            <div className="p-2 gap-2 flex flex-row items-center w-full hover:bg-gray-300 hover:dark:bg-gray-600 rounded cursor-pointer select-none">
              <CompanyAvatar url="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              <span className="flex-grow">{company}</span>
            </div>
          </PopoverTrigger>
        </div>
        <PopoverContent className="flex flex-row">
          <Link className="flex-grow" href={"/login"}>
            Home
          </Link>
          <ModeToggle />
        </PopoverContent>
      </Popover>
      <ul className="text-sm">
        <li>
          <SidebarTab
            path={`/workspace/${params.postid}/openings`}
            clickHandler={handleClick}
            activePath={activePathState}
          >
            <CgMenuGridR />
            <span className="flex-grow">Jobs</span>
          </SidebarTab>
        </li>
        <li>
          <SidebarTab
            path={`/workspace/${params.postid}/settings`}
            clickHandler={handleClick}
            activePath={activePathState}
          >
            <IoMdSettings />
            <span className="flex-grow">Settings</span>
          </SidebarTab>
        </li>
      </ul>

      <ScrollArea></ScrollArea>
    </div>
  );
};
