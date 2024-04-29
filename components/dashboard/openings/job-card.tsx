"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useToast } from "@/components/ui/use-toast";
import { RxDotsHorizontal } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LuClock4 } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";

const exampleResponse = {
  link: "https://localhost:3000",
  jobtitle: "프로덕트 디자이너 채용(Sample)",
  created: "April 29, 2024",
  process: 9,
  disqualified: 3,
  hired: 0,
};

export const JobCard = () => {
  const [status, setStatus] = useState("Open");
  const { toast } = useToast();

  const changeStatus = (value: string) => {
    //send to server and wait for response
    const res = { status: "200" };
    if (res["status"] == "200") {
      toast({
        description: `Successfully ${value}`,
      });
      setStatus(value);
    } else {
      toast({
        variant: "destructive",
        description: `Something went wrong`,
      });
    }
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    toast({
      description: `Copied`,
    });
  };

  return (
    <div className=" border-[1px] rounded-lg dark:bg-gray-900">
      <div>
        <div className="flex flex-row p-2 pl-3 items-center justify-between select-none">
          <Select value={status} onValueChange={(e) => changeStatus(e)}>
            <SelectTrigger className="w-[90px]">
              <SelectValue>{status}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="p-1 h-auto" variant="outline">
                <RxDotsHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => copyToClipboard(exampleResponse.link)}
              >
                Copy Link
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="px-3 font-semibold">
          <span>{exampleResponse.jobtitle}</span>
        </div>
        <div className="px-4 pt-3 pb-2 h-10"></div>
        <div className="px-4 pt-2 pb-4">
          <div className="flex flex-row gap-1 items-center opacity-50 font-extralight">
            <LuClock4 />
            <span>{exampleResponse.created}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 text-sm p-2 h-9 bg-neutral-50 dark:bg-transparent items-center font-extralight border-t-[1px]">
        <div className="flex flex-row gap-1">
          <span className="opacity-50">All</span>
          <span className="font-semibold">
            {exampleResponse.process +
              exampleResponse.disqualified +
              exampleResponse.hired}
          </span>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-row gap-1">
          <span className="opacity-50">In process</span>
          <span className="font-semibold">{exampleResponse.process}</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="opacity-50">Disqualified</span>
          <span className="font-semibold">{exampleResponse.disqualified}</span>
        </div>
        <div className="flex flex-row gap-1">
          <span className="opacity-50">Hired</span>
          <span className="font-semibold">{exampleResponse.hired}</span>
        </div>
      </div>
    </div>
  );
};
