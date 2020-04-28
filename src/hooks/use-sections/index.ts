import {
  createContext,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
} from "react";
import { SectionName } from "../../models";

export type SectionRef = MutableRefObject<HTMLDivElement | null>;

type Sections = Record<SectionName, SectionRef>;

interface SectionContext {
  appMounted: boolean;
  sections: Partial<Sections>;
  registerSection: (name: SectionName, ref: SectionRef) => void;
  triggerSectionChange: (highlight: string) => void;
}

export const SectionContext = createContext<SectionContext | any>({
  appMounted: false,
  sections: {},
  registerSection: () => {},
  triggerSectionChange: () => {},
});

export const useSections = (): SectionContext & { sections: Sections } => {
  const context = useContext(SectionContext);
  return {
    ...context,
    sections: {
      welcome: useRef(null),
      designer: useRef(null),
      developer: useRef(null),
      enthusiast: useRef(null),
      ...context.sections,
    },
  };
};

export const useSectionRegister = (refName: string, sectionRef: SectionRef) => {
  const { registerSection, appMounted } = useContext(SectionContext);

  useEffect(() => {
    console.log("Using section going");
    if (refName) {
      console.log("MOUNTING", refName, "Appmounte dis", appMounted);
      registerSection(refName as SectionName, sectionRef);
    }
  }, [refName, sectionRef, registerSection, appMounted]);
};
