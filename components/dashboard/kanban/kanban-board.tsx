"use client";

import { KanbanCard } from "./kanban-card";

export const KanbanBoard = () => {
  return (
    <div className="flex flex-row gap-2 h-[calc(100vh+(-120px))]">
      <KanbanCard />
      <KanbanCard />
      <KanbanCard />
    </div>
  );
};
