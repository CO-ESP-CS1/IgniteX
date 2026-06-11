import { Hero } from "@/components/hero";
import { HomeWhatWeDo } from "@/components/home-what-we-do";
import { Stats } from "@/components/stats";
import { HomeProjectsPreview } from "@/components/home-projects-preview";
import { HomeTeasers } from "@/components/home-teasers";
import { HomeCta } from "@/components/home-cta";

export default function Home() {
  return (
    <div className="w-full min-w-0">
      <Hero />
      <HomeWhatWeDo />
      <Stats />
      <HomeProjectsPreview />
      <HomeTeasers />
      <HomeCta />
    </div>
  );
}
