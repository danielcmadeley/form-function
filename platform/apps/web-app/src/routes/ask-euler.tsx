import { createFileRoute } from "@tanstack/react-router";

import { SectionContent } from "@/components/dashboard/section-content";

export const Route = createFileRoute("/ask-euler")({
  component: AskEulerPage,
});

function AskEulerPage() {
  return <SectionContent title="Ask Euler" description="Work with the AI engineering copilot for Eurocode guidance, calculations, and follow-up reasoning." />;
}
