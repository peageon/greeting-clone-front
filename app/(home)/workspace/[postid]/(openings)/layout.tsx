import { OpeningBoard } from "@/components/dashboard/openings/openings-board";

export default function OpeningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <OpeningBoard>{children}</OpeningBoard>;
}
