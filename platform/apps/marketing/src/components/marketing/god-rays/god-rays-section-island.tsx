import { GodRays } from "@paper-design/shaders-react";

export function GodRaysSectionIsland() {
  return (
    <div className="h-[340px] w-full overflow-hidden border-b border-[oklch(90.3%_0.076_319.6)] bg-neutral-50 lg:h-[400px]">
      <GodRays
        width="100%"
        height="100%"
        colors={["#fcf5ff", "#f6cfff"]}
        colorBack="#fafafa"
        angle={180}
        speed={0.28}
      />
    </div>
  );
}
