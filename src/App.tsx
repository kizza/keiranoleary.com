import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Loading from "./components/Loading";
import routes from "./components/routes";
import { SectionContext, SectionRef } from "./hooks/use-sections";
import { SectionName } from "./models";
import "./shared/Animate.css";

const useAppMounted = () => {
  const [appMounted, setAppMounted] = useState<boolean>(false);
  useEffect(() => setAppMounted(true), [setAppMounted]);
  return { appMounted };
};

const useSectionRegister = () => {
  const [sections, setSections] = useState<any>({});

  const registerSection = (name: SectionName, ref: SectionRef) => {
    const registeredSection = { [name]: ref };
    const { assign } = Object;
    assign(sections, registeredSection);
    setSections(sections);
  };

  return { sections, registerSection };
};

const useSectionTheme = () => {
  const [headerHighlight, setHeaderHighlight] = useState<string>("black");

  return {
    headerHighlight,
    triggerSectionChange: (highlight: string) => setHeaderHighlight(highlight),
  };
};

/* const ScrollToTopOnMount = withRouter((props) => { */
/*   useEffect(() => { */
/*     window.scrollTo(0, 0); */
/*   }, [props.location.pathname]); */
/*   return null; */
/* }); */

const useResourceLoader = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [lastInterval, setLastInterval] = useState<
    NodeJS.Timeout | undefined
  >();

  const isLoaded = () => {
    const node = document.querySelector("html")!;
    const classNames = node.attributes.getNamedItem("class")?.value ?? "";
    const fonts = classNames
      .split(" ")
      .filter(each => each.indexOf("wf-") === 0);
    return fonts.length === 5;
  };

  const checkIfLoaded = () => {
    console.log("Checking...");
    if (isLoaded()) {
      console.log("Loaded all resources");
      setLoaded(true);
    }
  };

  useEffect(() => {
    const scheduleCheck = () =>
      setLastInterval(setInterval(checkIfLoaded, 1000));

    if (!loaded && !lastInterval) {
      scheduleCheck();
    }

    return () => lastInterval && clearInterval(lastInterval);
  }, [loaded, lastInterval]);

  return loaded;
};

export default () => {
  const { headerHighlight, triggerSectionChange } = useSectionTheme();
  const loaded = useResourceLoader();
  /* const loaded = true; //useResourceLoader(); */

  return (
    <div className={styles.App}>
      <SectionContext.Provider
        value={{
          ...useAppMounted(),
          ...useSectionRegister(),
          ...useSectionTheme(),
          triggerSectionChange,
        }}
      >
        {loaded ? (
          <Router>
            {/* <ScrollToTopOnMount /> */}
            <Header highlight={headerHighlight} />
            {routes}
          </Router>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </SectionContext.Provider>
    </div>
  );
};
