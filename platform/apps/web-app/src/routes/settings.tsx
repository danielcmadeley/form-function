import { createFileRoute } from "@tanstack/react-router";

import { SectionContent } from "@/components/dashboard/section-content";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return <SectionContent title="Settings" description="Manage workspace preferences, profile defaults, and project-level behavior." />;
}
