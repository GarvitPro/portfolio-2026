import React from "react";
import { CoverHero } from "@/components/sections/CoverHero";
import { EditorialIndex } from "@/components/sections/EditorialIndex";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { ChapterIndicator } from "@/components/layout/ChapterIndicator";

export default function HomePage() {
  return (
    <>
      <ChapterIndicator />
      <CoverHero />
      <EditorialIndex />
      <About />
      <Experience />
      <SelectedWork />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
