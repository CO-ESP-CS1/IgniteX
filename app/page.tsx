import { Hero } from "@/components/hero";
import { HomeTeasers } from "@/components/home-teasers";
import { Stats } from "@/components/stats";

export default function Home() {
  return (
    <div className="w-full min-w-0">
      <Hero />
      <Stats />
      <HomeTeasers />
    </div>
  );
}
