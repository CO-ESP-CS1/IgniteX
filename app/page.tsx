import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { HomeWhatWeDo } from "@/components/home-what-we-do";
import { Stats } from "@/components/stats";
import { VisionNetwork } from "@/components/vision-network";
import { Timeline } from "@/components/timeline";
import { HomeProjectsPreview } from "@/components/home-projects-preview";
import { MentorCards } from "@/components/mentor-cards";
import { TrustedPartners } from "@/components/trusted-partners";
import { HomeTeasers } from "@/components/home-teasers";
import { FaqSection } from "@/components/faq-section";
import { HomeCta } from "@/components/home-cta";
import {
  brand,
  faqGroups,
  mentors,
  timelineEvents,
  trustedPartnerLogos,
} from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accueil",
  description: brand.pitch,
  path: "/",
});

export default function Home() {
  return (
    <div className="w-full min-w-0">
      <Hero />
      <VisionNetwork />
      <HomeWhatWeDo />
      <Stats />
      <Timeline events={timelineEvents} />
      <HomeProjectsPreview />
      <TrustedPartners partners={trustedPartnerLogos} />
      <MentorCards mentors={mentors} />
      <HomeTeasers />
      <FaqSection groups={faqGroups} />
      <HomeCta />
    </div>
  );
}
