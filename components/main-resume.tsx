import { Container } from "@/components/container";
import React from "react";
import Motion from "@/components/motion";
import HeaderSection from "@/components/section/header-section";
import SkillSection from "@/components/section/skill-section";
import WorkSection from "@/components/section/work-section";
import ProjectSection from "@/components/section/project-section";
import EducationSection from "@/components/section/education-section";
import { AnimatedComponent, UsageProps } from "@/types/common";

export const FullResume = React.forwardRef(({ usage }: UsageProps, ref) => {
  const animatedComponents: AnimatedComponent[] = [
    { component: HeaderSection, props: { usage }, delay: 0.1 },
    { component: SkillSection, delay: 0.3 },
    { component: WorkSection, delay: 0.5 },
    { component: EducationSection, delay: 0.9 },
    { component: ProjectSection, delay: 0.7 },
  ];
  return (
    <Container
      className="mt-5 max-w-6xl mx-auto"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {animatedComponents.map(
        ({ component: Component, props = { usage: "live" }, delay }, index) =>
          usage === "live" ? (
            <Motion key={index} delay={delay}>
              <Component {...props} />
            </Motion>
          ) : (
            // disable animation for pdf
            <Component key={index} {...props} />
          )
      )}
    </Container>
  );
});

FullResume.displayName = "FullResume";
