import React, { useEffect, useState } from "react";
import useScrollPosition from "../../../hooks/use-scroll-position";
import { useSections } from "../../../hooks/use-sections";
import { SectionName } from "../../../models";
import { colours } from "../../../shared";
import {
  Designer,
  DesignerDetail,
  Developer,
  DeveloperDetail,
  Enthusiast,
  NextStep,
  Welcome,
} from "../../sections";

const WELCOME: SectionName = "welcome";
const DESIGNER: SectionName = "designer";
const DEVELOPER: SectionName = "developer";
const ENTHUSIAST: SectionName = "enthusiast";

export default () => {
  const { sections, triggerSectionChange } = useSections();

  const [sectionPositions, setSectionPositions] = useState<
    Record<string, number>
  >({});

  const setSectionPosition = (section: SectionName, y: number) => {
    sectionPositions[section] = y;
    setSectionPositions({ ...sectionPositions });
  };

  const useSectionScrollPosition = (sectionName: SectionName) => {
    useScrollPosition(
      ({ y }) => {
        setSectionPosition(sectionName, y);
      },
      sections[sectionName],
      30,
      [sections[sectionName]]
    );
  };

  useSectionScrollPosition(DESIGNER);
  useSectionScrollPosition(DEVELOPER);
  useSectionScrollPosition(ENTHUSIAST);

  const HEADER_CUTOFF = 90;

  const calculateCurrentSection = () =>
    [DESIGNER, DEVELOPER, ENTHUSIAST].reduce(
      (
        match: [SectionName, number],
        section: SectionName,
        i: number
      ): [SectionName, number] => {
        const y = sectionPositions[section];
        const [, latestY] = match;
        return y < HEADER_CUTOFF && i > latestY ? [section, y] : match;
      },
      [WELCOME, -10000]
    );

  const [currentSection] = calculateCurrentSection();

  useEffect(() => {
    const handleHeaderHighlight = (section: SectionName) => {
      const highlights: Partial<Record<SectionName, string>> = {
        designer: colours.pink,
        developer: colours.steel,
        enthusiast: colours.blue,
      };

      const highlight = highlights[section] || "";
      triggerSectionChange(highlight);
    };

    handleHeaderHighlight(currentSection);
  }, [currentSection, triggerSectionChange]);

  return (
    <div>
      <Welcome />
      <Designer />
      <DesignerDetail />
      <Developer />
      <DeveloperDetail />
      <Enthusiast />
      <NextStep />
    </div>
  );
};
