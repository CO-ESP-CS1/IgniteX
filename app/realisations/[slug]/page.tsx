import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/page-banner";
import { ProjectDetail } from "@/components/project-detail";
import { brand, getProjectBySlug, projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: brand.trademark };

  return {
    title: `${project.name} : ${brand.trademark}`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <PageBanner label="Projet" title={project.name} description={project.tagline} />
      <ProjectDetail project={project} />
    </>
  );
}
