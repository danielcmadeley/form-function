import { createFileRoute } from "@tanstack/react-router";

import { SectionContent } from "@/components/dashboard/section-content";

export const Route = createFileRoute("/calculation-docs")({
  component: CalculationDocsPage,
});

function CalculationDocsPage() {
  return <SectionContent title="Calculation Docs" description="Generate, review, and version calculation reports with linked assumptions and references." />;
}
