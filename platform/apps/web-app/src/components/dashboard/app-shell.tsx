import { Outlet } from "@tanstack/react-router";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";

export function AppShell() {
  return (
    <main className="min-h-svh bg-[oklch(98.5%_0_0)] p-1">
      <div className="flex h-[calc(100svh-0.5rem)] overflow-hidden rounded-lg border border-fuchsia-300/40">
        <DashboardSidebar />
        <Outlet />
      </div>
    </main>
  );
}
