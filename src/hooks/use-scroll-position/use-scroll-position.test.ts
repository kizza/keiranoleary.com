import React, { MutableRefObject } from "react";
import useScrollPosition from ".";
// import { render } from "@testing-library/react";
// import useScrollPosition from "./";

const mockDOMRect = (props: Partial<DOMRect>): DOMRect => ({
  bottom: 0,
  height: 10,
  left: 0,
  right: 0,
  top: 0,
  width: 10,
  x: 0,
  y: 0,
  toJSON: () => {},
  ...props,
});

const mockElementRef = (
  props: Partial<DOMRect>
): MutableRefObject<Element> => ({
  current: {
    getBoundingClientRect: () => mockDOMRect(props),
  } as Element,
});

describe.only("useScrollPosition", () => {
  test("scrolls", () => {
    const elementRef = mockElementRef({ top: 10 });

    useScrollPosition(
      ({ y }) => {
        console.log("Scroll", y);
      },
      elementRef,
      0
    );

    expect(true).toBe(true);
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });
});
