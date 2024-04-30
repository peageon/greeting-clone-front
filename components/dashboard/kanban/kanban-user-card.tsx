"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuClock4 } from "react-icons/lu";
import { RxDotsHorizontal } from "react-icons/rx";

const exampleResponse = {
  link: "https://localhost:3000",
  route: "wanted.co.kr",
  name: "최진수",
  created: "April 29, 2024",
  reviewdone: 3,
  reviewtotal: 3,
};

export const KanbanUserCard = () => {
  const getreviewstatus = () => {
    if (exampleResponse.reviewdone == exampleResponse.reviewtotal) {
      return (
        <span className="text-sky-500">
          Done {exampleResponse.reviewdone}/{exampleResponse.reviewtotal}
        </span>
      );
    } else {
      return (
        <span>
          In Review ({exampleResponse.reviewdone}/{exampleResponse.reviewtotal})
        </span>
      );
    }
  };

  return (
    <div className="w-full relative flex flex-col border-[1px] rounded-lg bg-white dark:bg-gray-900 shadow">
      <div className="px-3">
        <div className="flex flex-row py-2 items-center justify-between">
          <span className="font-semibold">{exampleResponse.name}</span>
        </div>
        <div className="pb-1.5">
          <Badge className="font-semibold select-none">
            {exampleResponse.route}
          </Badge>
        </div>
        <div className="pb-2">
          <div className="flex flex-row gap-1 items-center opacity-50 text-sm font-extralight">
            <LuClock4 />
            <span>{exampleResponse.created}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 text-sm p-2 h-9 items-center font-extralight border-t-[1px]">
        <HoverCard openDelay={0} closeDelay={150}>
          <Button className="p-0 h-auto" variant="ghost" asChild>
            <HoverCardTrigger className="font-medium text-sm">
              {getreviewstatus()}
            </HoverCardTrigger>
          </Button>
          <HoverCardContent>d</HoverCardContent>
        </HoverCard>
      </div>
      <div className="absolute top-[6px] right-[6px] drop-shadow">
        <DropdownMenu>
          <Button className="p-1 h-auto" variant="outline" asChild>
            <DropdownMenuTrigger>
              <RxDotsHorizontal />
            </DropdownMenuTrigger>
          </Button>
          <DropdownMenuContent>
            <DropdownMenuItem
            // onClick={() => }
            >
              Copy Link
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
