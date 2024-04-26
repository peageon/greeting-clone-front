"use client";

import { CgMenuGridR } from "react-icons/cg";
import { CategoryHeader } from "../category-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const OpeningBoard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const [optionState, setOptionState] = useState(true);

  useEffect(() => {
    if (pathname.endsWith("openings")) {
      setOptionState(true);
    }
    if (pathname.endsWith("archive")) {
      setOptionState(false);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col w-full mt-5">
      <CategoryHeader>
        <div className="flex flex-row gap-2 pb-2 items-center">
          <CgMenuGridR />
          <span>Jobs</span>
          <Button className="bg-blue-500 rounded-sm py-0 gap-2 h-7 hover:bg-blue-600">
            <span>+</span>
            <span>Create a job</span>
          </Button>
        </div>
        <div className="flex flex-row center gap-2 select-none">
          <div className="flex flex-col items-center gap-1">
            <Button
              className={cn("py-0 px-2", optionState ? "font-bold" : "")}
              variant={"ghost"}
              asChild
            >
              <Link href={pathname.replace("archive", "openings")}>Jobs</Link>
            </Button>
            <span
              className={cn("h-[2px] w-4/5", optionState ? "bg-blue-600" : "")}
            ></span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Button
              className={cn("py-0 px-2", !optionState ? "font-bold" : "")}
              variant={"ghost"}
              asChild
            >
              <Link href={pathname.replace("openings", "archive")}>
                Archive
              </Link>
            </Button>
            <span
              className={cn("h-[2px] w-4/5", !optionState ? "bg-blue-600" : "")}
            ></span>
          </div>
        </div>
      </CategoryHeader>
      {children}
    </div>
  );
};
