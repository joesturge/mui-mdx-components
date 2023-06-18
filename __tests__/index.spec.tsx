import React from "react";
import components from "../src/index";
import { RenderResult, render } from "@testing-library/react";
import { MDXProvider } from "@mdx-js/react";
import TestTypography from "./data/TestTypography.md";
import TestLink from "./data/TestLink.md";
import TestLists from "./data/TestLists.md";
import TestDivider from "./data/TestDivider.md";

describe("MUI MDX Components", () => {
  let wrapper: RenderResult;

  describe("Overrides", () => {
    beforeEach(() => {
      wrapper = render(
        <MDXProvider
          components={components({
            overrides: {
              h1: () => <div data-testid="override">this is an override</div>,
            },
          })}
        >
          <TestTypography />
        </MDXProvider>
      );
    });

    test("renders successfully.", () => {
      expect(wrapper).toBeTruthy();
    });

    test("overrode applied.", () => {
      expect(wrapper.getByTestId("override")).toBeTruthy();
      expect(wrapper.container.querySelector('h1')).toBeFalsy();
    });
  });

  describe("Typographies", () => {
    beforeEach(() => {
      wrapper = render(
        <MDXProvider
          components={components({
            propOverrides: {
              h1: { id: "h1-id" },
              h2: { id: "h2-id" },
              h3: { id: "h3-id" },
              h4: { id: "h4-id" },
              h5: { id: "h5-id" },
              h6: { id: "h6-id" },
              p: { id: "p-id" },
              em: { id: "em-id" },
              strong: { id: "strong-id" },
              wrapper: { id: "wrapper-id" },
            },
          })}
        >
          <TestTypography />
        </MDXProvider>
      );
    });

    test("renders successfully.", () => {
      expect(wrapper).toBeTruthy();
    });

    test("wrapper renders correctly.", () => {
      const result = wrapper.container.querySelector(".markdown-body");
      expect(result).toBeTruthy();
      expect(result?.getAttribute("id")).toEqual("wrapper-id");
    });

    test.each([
      ["h1", "h1 test", "h1-id", "MuiTypography-h1"],
      ["h2", "h2 test", "h2-id", "MuiTypography-h2"],
      ["h3", "h3 test", "h3-id", "MuiTypography-h3"],
      ["h4", "h4 test", "h4-id", "MuiTypography-h4"],
      ["h5", "h5 test", "h5-id", "MuiTypography-h5"],
      ["h6", "h6 test", "h6-id", "MuiTypography-h6"],
      ["p", "p test", "p-id", "MuiTypography-body1"],
      ["em", "em test", "em-id", "MuiTypography-inherit"],
      ["strong", "strong test", "strong-id", "MuiTypography-inherit"],
    ])("%s renders correctly.", (element, content, idOverride, className) => {
      const result = wrapper.container.querySelector(element);
      expect(result).toBeTruthy();
      expect(result?.getAttribute("id")).toEqual(idOverride);
      expect(result?.textContent).toEqual(content);
      expect(result?.className).toContain(className);
    });
  });

  describe("Links", () => {
    beforeEach(() => {
      wrapper = render(
        <MDXProvider
          components={components({
            propOverrides: {
              a: { id: "a-id" },
            },
          })}
        >
          <TestLink />
        </MDXProvider>
      );
    });

    test("renders successfully.", () => {
      expect(wrapper).toBeTruthy();
    });

    test.each([["a", "a test", "a-id", "MuiTypography-inherit"]])(
      "%s renders correctly.",
      (element, content, idOverride, className) => {
        const result = wrapper.container.querySelector(element);
        expect(result).toBeTruthy();
        expect(result?.getAttribute("id")).toEqual(idOverride);
        expect(result?.textContent).toEqual(content);
        expect(result?.className).toContain(className);
      }
    );
  });

  describe("Lists", () => {
    beforeEach(() => {
      wrapper = render(
        <MDXProvider
          components={components({
            propOverrides: {
              ol: { id: "ol-id" },
              ul: { id: "ul-id" },
              li: { className: "listitem-class" },
            },
          })}
        >
          <TestLists />
        </MDXProvider>
      );
    });

    test("renders successfully.", () => {
      expect(wrapper).toBeTruthy();
    });

    test.each([
      [
        "ol",
        "\nordered 1\nordered 2\nordered 3\nordered 4\nordered 5\n",
        "ol-id",
        "MuiTypography-inherit",
      ],
      [
        "ul",
        "\nunordered 1\nunordered 2\nunordered 3\nunordered 4\nunordered 5\n",
        "ul-id",
        "MuiTypography-inherit",
      ],
    ])("%s renders correctly.", (element, content, idOverride, className) => {
      const result = wrapper.container.querySelector(element);
      expect(result).toBeTruthy();
      expect(result?.getAttribute("id")).toEqual(idOverride);
      expect(result?.textContent).toEqual(content);
      expect(result?.className).toContain(className);
    });

    test("list items have prop override applied.", async () => {
      const result = await wrapper.findAllByRole("listitem");

      expect(result).toHaveLength(10);

      result.forEach((element) => {
        expect(element.className).toContain("listitem-class");
      });
    });
  });

  describe("Divider", () => {
    beforeEach(() => {
      wrapper = render(
        <MDXProvider
          components={components({
            propOverrides: {
              hr: { id: "hr-id" },
            },
          })}
        >
          <TestDivider />
        </MDXProvider>
      );
    });

    test("renders successfully.", () => {
      expect(wrapper).toBeTruthy();
    });

    test.each([["hr", "hr-id", "MuiDivider-fullWidth"]])(
      "%s renders correctly.",
      (element, idOverride, className) => {
        const result = wrapper.container.querySelector(element);
        expect(result).toBeTruthy();
        expect(result?.getAttribute("id")).toEqual(idOverride);
        expect(result?.className).toContain(className);
      }
    );
  });
});
