import { Heatmap } from "@paper-design/shaders-react";

export function HeatmapStripIsland() {
  return (
    <div className="h-[130px] w-full overflow-hidden border-b border-[oklch(90.3%_0.076_319.6)] lg:h-[150px]">
      <Heatmap
        width="100%"
        height="100%"
        image="/logo.svg"
        colors={["#fcf5ff", "#f6cfff"]}
        colorBack="#fcf5ff"
        contour={0.5}
        angle={0}
        noise={0.75}
        innerGlow={0.5}
        outerGlow={0.5}
        speed={0.5}
        scale={0.75}
      />
    </div>
  );
}
