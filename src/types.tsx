import { MDXComponents } from "mdx/types.js";

export type MuiMdxComponentsOptionsPropOverrides = {
  [key in keyof MDXComponents]?: object;
};

export type MuiMdxComponentsOptions = {
  overrides?: MDXComponents;
  propOverrides?: MuiMdxComponentsOptionsPropOverrides;
};
