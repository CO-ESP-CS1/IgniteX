import type { Metadata } from "next";
import { About } from "@/components/about";
import { MentorCards } from "@/components/mentor-cards";
import { PageBanner } from "@/components/page-banner";
import { Timeline } from "@/components/timeline";
import { brand, mentors, timelineEvents } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Le groupe",
  description: `Découvrez ${brand.trademark} : PEJOSOFT, JM TECHNOLOGIES et BKT Labs — trois entités, une vision commune.`,
  path: "/groupe",
});

export default function GroupePage() {
  return (
    <>
      <PageBanner
        label="Le groupe"
        title={`Qui est ${brand.trademark} ?`}
        description="Trois entités complémentaires, une marque unifiée, au-delà des frontières."
      />
      <About />
      <MentorCards mentors={mentors} showLink={false} />
      <Timeline
        events={timelineEvents}
        label="Histoire"
        title="Notre parcours collectif"
        description="De l'expérience terrain à IgniteX™ Platform v7."
      />
    </>
  );
}
