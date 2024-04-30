"use client";

import { Button } from "@/components/ui/button";
import { LuMoreVertical, LuPlus } from "react-icons/lu";
import { KanbanUserCard } from "./kanban-user-card";

export const KanbanCard = () => {
  const userCount = 10;

  return (
    <div className="flex flex-col w-[290px] bg-gray-200 rounded-lg">
      <div className="flex flex-row justify-between items-center p-2 border-b-[1px] border-black/10">
        <div>
          <span className="text-sm font-medium">지원 접수</span>
        </div>
        <div className="flex flex-row gap-1">
          <Button className="p-0 px-1 h-auto text-lg" variant={"ghost"}>
            <LuPlus />
          </Button>
          <Button className="p-0 px-1 h-auto text-lg" variant={"ghost"}>
            <LuMoreVertical />
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center p-2 gap-1.5 overflow-y-auto scrollbar-hide">
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
        <KanbanUserCard />
      </div>
      <div className="flex flex-row items-center py-1 px-2 border-t-[1px] border-black/10">
        <div>
          <span className="font-semibold text-sm">
            1 - {userCount} (All {userCount})
          </span>
        </div>
      </div>
    </div>
  );
};
