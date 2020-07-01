import React, { MutableRefObject } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useScrollPosition from ".";
import { fireEvent } from "@testing-library/react";

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
    const elementRef = mockElementRef({ top: 12 });
    let scrolledCallback;

    renderHook(() =>
      useScrollPosition(({ y }) => (scrolledCallback = y), elementRef, 0)
    );

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 200 } });
    });

    expect(scrolledCallback).toBe(12);
  });
});
