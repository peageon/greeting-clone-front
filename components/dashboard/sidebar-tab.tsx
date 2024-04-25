import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarTabProps {
  children: React.ReactNode;
  path: string;
  clickHandler: Function;
  activePath: string;
}

export const SidebarTab = ({
  children,
  path,
  clickHandler,
  activePath,
}: SidebarTabProps) => {
  return (
    <Link
      className={cn(
        "py-2 px-4 gap-3 flex flex-row items-center h-8 w-full rounded cursor-pointer select-none",
        activePath.startsWith(path) ? "bg-gray-300" : "hover:bg-gray-300"
      )}
      href={path}
      onClick={() => clickHandler(path)}
    >
      {children}
    </Link>
  );
};
