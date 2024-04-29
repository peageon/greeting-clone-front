"use client";

import { JobCard } from "./job-card";

export const JobGrid = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] py-4 px-6 gap-2">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};
