import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const inboxItems = [
  { id: "CB", title: "Client brief - Flat 4", subtitle: "Sarah Alderton - 2h ago", dot: "bg-fuchsia-500" },
  { id: "DR", title: "Drawing rev C uploaded", subtitle: "Auto-import - 5h ago", dot: "bg-zinc-400" },
  { id: "RC", title: "Review comment on detail", subtitle: "James Wu - yesterday", dot: "bg-zinc-400" },
];

const calculations = [
  { name: "RC beam - ULS check", location: "Maple Road - 1h ago", status: "Draft" },
  { name: "Column buckling check", location: "Hurst Lane - 3h ago", status: "Complete" },
  { name: "Foundation pad sizing", location: "Maple Road - yesterday", status: "Review" },
];

const projects = [
  { name: "14 Maple Road", progress: 0.62, riba: "RIBA 4" },
  { name: "Hurst Lane Extension", progress: 0.28, riba: "RIBA 2" },
  { name: "Abbots Way Loft", progress: 0.88, riba: "RIBA 5" },
];

const deadlines = [
  { date: "24 Mar", task: "iStructE submission", left: "2 days" },
  { date: "31 Mar", task: "BC drawings issue", left: "9 days" },
  { date: "04 Apr", task: "Calcs sign-off", left: "14 days" },
];

const statusItems = [
  { label: "In progress", count: 4, color: "bg-fuchsia-500" },
  { label: "Awaiting review", count: 2, color: "bg-fuchsia-300" },
  { label: "Action required", count: 1, color: "bg-zinc-500" },
  { label: "On hold", count: 1, color: "bg-zinc-300" },
];

export function DashboardContent() {
  return (
    <section className="flex min-w-0 flex-1 flex-col bg-[oklch(97.7%_0.017_320.1)]">
      <div className="flex h-9 items-center border-b border-fuchsia-300/40 px-3">
        <div className="rounded-md border border-fuchsia-300/40 bg-fuchsia-50/60 px-2 py-0.5 text-xs text-fuchsia-900">/ Dashboard</div>
        <Button type="button" variant="ghost" size="icon-xs" className="ml-2 h-6 w-6 text-fuchsia-800">
          +
        </Button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-5 px-6 py-5 lg:px-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-zinc-800">Morning, Daniel</h1>
            <p className="mt-1 text-sm text-zinc-500">Welcome to your dashboard, where you control what&apos;s going on</p>
          </div>
          <p className="pt-2 text-sm font-semibold tracking-wide text-zinc-700">SUNDAY 16th MARCH</p>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
          <Card className="gap-2 border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Inbox</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {inboxItems.map((item) => (
                <div key={item.title} className="flex items-start justify-between gap-3 text-sm">
                  <div className="flex gap-2">
                    <div className="mt-1 text-[10px] font-semibold text-fuchsia-700">{item.id}</div>
                    <div>
                      <p className="font-medium text-zinc-800">{item.title}</p>
                      <p className="text-xs text-zinc-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <span className={`mt-1 h-2.5 w-2.5 rounded-full ${item.dot}`} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="gap-2 border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Recent Calculations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {calculations.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-3 text-sm">
                  <div>
                    <p className="font-medium text-zinc-800">{item.name}</p>
                    <p className="text-xs text-zinc-500">{item.location}</p>
                  </div>
                  <Badge variant="secondary" className="border border-fuchsia-300/40 bg-fuchsia-100 text-[10px] text-fuchsia-800">
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="gap-2 border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Active Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map((item) => (
                <div key={item.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <p className="font-medium text-zinc-800">{item.name}</p>
                    <Badge variant="outline" className="border-fuchsia-300/40 text-[10px] text-fuchsia-800">
                      {item.riba}
                    </Badge>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full bg-fuchsia-500" style={{ width: `${Math.round(item.progress * 100)}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_1fr_0.62fr]">
          <Card className="gap-2 border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {deadlines.map((item) => (
                <div key={item.task} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-fuchsia-700">{item.date}</span>
                    <span className="text-zinc-800">{item.task}</span>
                  </div>
                  <Badge variant="outline" className="border-fuchsia-300/40 text-[10px] text-zinc-700">
                    {item.left}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="gap-2 border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {[
                "New Calculation",
                "New Project",
                "Upload Drawing",
                "Generate Report",
              ].map((action) => (
                <Button
                  key={action}
                  type="button"
                  variant="outline"
                  className="h-12 border-fuchsia-300/40 bg-fuchsia-100/40 text-zinc-700 hover:bg-fuchsia-100"
                >
                  {action}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="gap-2 border border-fuchsia-300/40 bg-fuchsia-50/30 py-2">
            <CardHeader className="border-b border-fuchsia-300/30 pb-2">
              <CardTitle className="text-sm text-zinc-700">Project Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {statusItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-800">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    {item.label}
                  </div>
                  <span className="font-semibold text-zinc-700">{item.count}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-auto rounded-xl border border-fuchsia-300/50 bg-[oklch(90.3%_0.076_319.6)] px-4 py-3">
          <Input
            placeholder="Search the codes..."
            className="h-10 border-transparent bg-transparent px-0 text-sm text-zinc-700 placeholder:text-zinc-600/75 focus-visible:border-transparent focus-visible:ring-0"
          />
          <Separator className="my-2 bg-fuchsia-300/40" />
          <div className="flex items-center justify-between">
            <Button
              type="button"
              size="icon-xs"
              variant="outline"
              className="h-6 w-6 rounded-full border-fuchsia-300 bg-fuchsia-50 text-zinc-700"
            >
              +
            </Button>
            <Button
              type="button"
              size="icon-xs"
              variant="outline"
              className="h-6 w-6 rounded-full border-fuchsia-300 bg-fuchsia-50 text-zinc-700"
            >
              →
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-7 items-center justify-between border-t border-fuchsia-300/40 px-4 text-xs text-zinc-600">
        <Badge variant="outline" className="h-4 border-fuchsia-300/40 px-1.5 text-[10px] text-zinc-600">
          Ask Euler
        </Badge>
        <div className="flex items-center gap-3">
          <span>Tue 17 Mar</span>
          <span>17:23</span>
        </div>
      </div>
    </section>
  );
}
