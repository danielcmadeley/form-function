import { createFileRoute } from "@tanstack/react-router";

import { SectionContent } from "@/components/dashboard/section-content";

export const Route = createFileRoute("/structural-toolkit")({
  component: StructuralToolkitPage,
});

function StructuralToolkitPage() {
  return <SectionContent title="Structural Toolkit" description="Run structural checks, iterate section options, and compare performance against code limits." />;
}
