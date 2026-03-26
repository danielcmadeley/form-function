import { createFileRoute } from "@tanstack/react-router";

import { SectionContent } from "@/components/dashboard/section-content";

export const Route = createFileRoute("/file-manager")({
  component: FileManagerPage,
});

function FileManagerPage() {
  return <SectionContent title="File Manager" description="Organize drawings, reports, and project documents in one searchable workspace." />;
}
