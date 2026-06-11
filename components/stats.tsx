import { StatsCounter } from "@/components/stats-counter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <StatsCounter
      items={stats}
      variant="band"
      intro="Plus de 29 projets livrés : applications, plateformes et systèmes métiers déjà en service"
    />
  );
}
