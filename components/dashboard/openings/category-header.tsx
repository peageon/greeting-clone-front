"use client";

export const CategoryHeader = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <header className="flex items-end justify-between w-full border-b border-solid border-black/10 dark:border-white/20 px-6">
      {children}
    </header>
  );
};
