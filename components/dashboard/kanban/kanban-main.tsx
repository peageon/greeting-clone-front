"use client";

import { KanbanBoard } from "./kanban-board";
import { KanbanHeader } from "./kanban-header";

export const KanbanMain = () => {
  return (
    <div>
      <KanbanHeader />
      <KanbanBoard />
    </div>
  );
};
