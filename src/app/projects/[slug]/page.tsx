import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject =
    projectsData[
      (currentIndex - 1 + projectsData.length) % projectsData.length
    ];

  return (
    <ProjectCaseStudy
      project={project}
      nextProject={nextProject}
      prevProject={prevProject}
    />
  );
}
