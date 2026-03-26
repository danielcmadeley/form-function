import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SectionContentProps = {
  title: string;
  description: string;
};

export function SectionContent({ title, description }: SectionContentProps) {
  return (
    <section className="flex min-w-0 flex-1 flex-col bg-[oklch(97.7%_0.017_320.1)]">
      <div className="flex h-9 items-center border-b border-fuchsia-300/40 px-3">
        <div className="rounded-md border border-fuchsia-300/40 bg-fuchsia-50/60 px-2 py-0.5 text-xs text-fuchsia-900">/ {title}</div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-6 px-6 py-5 lg:px-8">
        <div>
          <h1 className="text-4xl font-semibold text-zinc-800">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">{description}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-700">
              <p>This section is ready for app-specific content and workflows.</p>
              <p>Github Test</p>
              <Badge variant="outline" className="border-fuchsia-300/40 text-fuchsia-800">
                Placeholder
              </Badge>
            </CardContent>
          </Card>

          <Card className="border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-zinc-700">
              <p>1. Connect APIs and data models.</p>
              <p>2. Add interactive controls and validation.</p>
              <p>3. Integrate with Ask Euler workflows.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
