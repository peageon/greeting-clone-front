"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CompanyAvatarProps {
  url?: string;
}

export const CompanyAvatar = ({ url }: CompanyAvatarProps) => {
  return (
    <Avatar className="rounded-lg bg-white w-6 h-6 p-0.5">
      <AvatarImage src={url} />
      <AvatarFallback className="rounded-lg">GT</AvatarFallback>
    </Avatar>
  );
};
