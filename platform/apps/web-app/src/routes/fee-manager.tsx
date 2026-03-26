import { createFileRoute } from "@tanstack/react-router";

import { SectionContent } from "@/components/dashboard/section-content";

export const Route = createFileRoute("/fee-manager")({
  component: FeeManagerPage,
});

function FeeManagerPage() {
  return <SectionContent title="Fee Manager" description="Plan fee stages, monitor profitability, and keep commercial tracking aligned with delivery." />;
}
