import { createRootRoute } from "@tanstack/react-router";

import { AppShell } from "@/components/dashboard/app-shell";

export const Route = createRootRoute({
  component: AppShell,
});
