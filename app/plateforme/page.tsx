import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { Platform } from "@/components/platform";
import { Timeline } from "@/components/timeline";
import { brand, platform, timelineEvents } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: platform.title,
  description: platform.description,
  path: "/plateforme",
});

const platformTimeline = timelineEvents.filter((e) =>
  ["platform-v69", "platform-v7"].includes(e.id),
);

export default function PlateformePage() {
  return (
    <>
      <PageBanner
        label="Moteur propriétaire"
        title={platform.title}
        description={platform.subtitle}
      />
      <Platform />
      <Timeline
        events={platformTimeline}
        label="Évolution"
        title="De la v6.9 à la v7"
        description="Le moteur propriétaire qui accélère chaque système IgniteX™."
        className="bg-background"
      />
    </>
  );
}
