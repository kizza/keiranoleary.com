import { faMobile, faSitemap, faTint } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Column from "../../Column";
import Columns from "../../Columns";
import Section from "../../Section";
import sections from "../../sections/Columns.module.scss";
import dividers from "../../sections/Dividers.module.scss";
import styles from "./DeveloperDetail.module.scss";

export default () => (
  <Section
    backgroundColour="fff"
    classNames={[sections.Columns, styles.DeveloperDetail]}
    dividerClassName={dividers.BlueDivider}
    downIcon={false}
  >
    <Columns>
      <Column title="Layout and content strategy" icon={faSitemap}>
        <p>
          Being mindful about which content is most important and intentional
          about how it’s displayed is critical. I love spending time sketching
          and strategising the best approaches to ensure a website is visually
          easy to digest and intuitive to navigate.
        </p>
      </Column>
      <Column title="Accessibility and responsiveness" icon={faMobile}>
        <p>
          I’ve spent a large part of my career within the accessibility and
          disability sector so am very mindful of the variety of ways people
          access content. As such I have a passion for both website
          responsiveness across devices and web standards towards accessibility.
        </p>
      </Column>
      <Column title="Typography and colour" icon={faTint}>
        <p>
          Typography and colour combine to create their own language in
          communicating content and value. I love iterating through designs and
          mockups to create the perfect balance of clarity and flair.
        </p>
      </Column>
    </Columns>
  </Section>
);
