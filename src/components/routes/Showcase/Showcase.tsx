import React from "react";
import { SelectedWorks, NextStep } from "../../sections";
import ShowcaseItem from "../../ShowcaseItem";

interface ShowcaseItem {
  slug: string;
  title: string;
  description: string;
  alphaColour: number[];
  showcaseClass?: string;
  backgroundColour: string;
}

const showcaseItem = ({
  title,
  description,
  slug,
  alphaColour,
  showcaseClass,
  backgroundColour,
}: ShowcaseItem): ShowcaseItem => ({
  title,
  description,
  slug,
  alphaColour,
  showcaseClass,
  backgroundColour,
});

export default () => {
  const showcase: ShowcaseItem[] = [
    showcaseItem({
      slug: "susanna",
      title: "Susanna O'Leary",
      description:
        "An eclectic and emotive design promoting a wonderful female vocalist",
      alphaColour: [0, 0, 0, 0.6],
      backgroundColour: "black",
    }),
    showcaseItem({
      slug: "aase",
      title: "Australian Association of Special Education",
      description:
        "A professional while approachable design hosting a variety of documents and resources.",
      alphaColour: [124, 165, 14, 0.6],
      backgroundColour: "#7ca50e",
    }),
    showcaseItem({
      slug: "cfma",
      title: "Centre for Men Australia",
      description:
        "A board appealing design reaching out to men and families around australia.",
      alphaColour: [71, 15, 15, 0.8],
      backgroundColour: "#ae2421",
    }),
    showcaseItem({
      slug: "mylillist",
      title: "Mylillist",
      description:
        "A sleek and minimal design for one of the best list taking apps out there.",
      alphaColour: [0, 0, 0, 0.8],
      /* showcaseClass: styles.LightBackground, */
      backgroundColour: "#e5e5e5",
    }),
    showcaseItem({
      slug: "imaya",
      title: "Imaya",
      description: "A luxurious design for a latin jazz duo.",
      alphaColour: [71, 15, 15, 0.5],
      backgroundColour: "#ae2421",
    }),
  ];

  return (
    <div>
      <SelectedWorks />
      {showcase.map(
        (
          {
            title,
            showcaseClass,
            description,
            slug,
            alphaColour,
            backgroundColour,
          },
          i
        ) => (
          <ShowcaseItem
            key={`showcase-${i}`}
            showcaseClass={showcaseClass}
            title={title}
            description={description}
            alphaColour={alphaColour}
            backgroundColour={backgroundColour}
            backgroundImage={`images/showcase/${slug}-blurred.jpg`}
            thumbnail={`images/showcase/${slug}.png`}
          />
        )
      )}
      <NextStep />
    </div>
  );
};
