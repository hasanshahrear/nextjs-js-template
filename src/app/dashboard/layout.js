"use client";

import { PageGuard } from "@/features/auth";

export default function UserDashboardLayout({ children }) {
  return (
    <PageGuard>
      <section className="container py-5">
        <div className="flex rounded-lg gap-4">
          {/* side navbar */}
          <div className="w-[400px] h-[96vh] overflow-y-auto no-scrollbar border border-[#D5D9DD] rounded-lg bg-white"></div>

          {/* page content */}
          <div className="rounded-lg w-[1160px] h-[96vh] overflow-y-auto no-scrollbar border border-[#D5D9DD]">
            {children}
          </div>
        </div>
      </section>
    </PageGuard>
  );
}
