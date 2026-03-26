import { Button } from "@/components/ui/button";
import { useNavigate, useRouterState } from "@tanstack/react-router";

const topLinks = [
  { label: "D", to: "/" },
  { label: "P", to: "/project-manager" },
  { label: "S", to: "/structural-toolkit" },
  { label: "C", to: "/calculation-docs" },
  { label: "A", to: "/ask-euler" },
  { label: "F", to: "/file-manager" },
  { label: "$", to: "/fee-manager" },
];

const bottomLinks = [{ label: "⚙", to: "/settings" }];

export function DashboardSidebar() {
  const navigate = useNavigate();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  return (
    <aside className="flex h-full w-11 shrink-0 flex-col items-center justify-between border-r border-fuchsia-300/40 bg-fuchsia-950 py-2 text-fuchsia-100">
      <div className="flex w-full flex-col items-center gap-2">
        <div className="text-lg font-black text-fuchsia-400">F</div>
        <div className="h-px w-6 bg-fuchsia-200/30" />
        <div className="flex w-full flex-col items-center gap-1 pt-1">
          {topLinks.map((item) => (
            <Button
              key={item.to}
              type="button"
              variant="ghost"
              size="icon-xs"
              className={`h-6 w-6 rounded-md p-0 text-[10px] hover:bg-fuchsia-500/20 hover:text-white ${
                isActive(item.to) ? "bg-fuchsia-500/30 text-white" : "text-fuchsia-100/80"
              }`}
              onClick={() => {
                navigate({ to: item.to });
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-1 pb-1">
        {bottomLinks.map((item) => (
          <Button
            key={item.to}
            type="button"
            variant="ghost"
            size="icon-xs"
            className={`h-6 w-6 rounded-md p-0 text-[10px] hover:bg-fuchsia-500/20 hover:text-white ${
              isActive(item.to) ? "bg-fuchsia-500/30 text-white" : "text-fuchsia-100/80"
            }`}
            onClick={() => {
              navigate({ to: item.to });
            }}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </aside>
  );
}
