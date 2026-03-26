import { createFileRoute } from "@tanstack/react-router";

import { SectionContent } from "@/components/dashboard/section-content";

export const Route = createFileRoute("/project-manager")({
  component: ProjectManagerPage,
});

function ProjectManagerPage() {
  return <SectionContent title="Project Manager" description="Track delivery milestones, team tasks, and project health across all active jobs." />;
}
