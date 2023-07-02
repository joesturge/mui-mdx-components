/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXComponents } from "mdx/types.js";

export type MuiMdxComponentsOptionsPropOverrides = {
  [key in keyof MDXComponents]?: any;
};

export type MuiMdxComponentsOptions = {
  overrides?: MDXComponents;
  propOverrides?: MuiMdxComponentsOptionsPropOverrides;
};
