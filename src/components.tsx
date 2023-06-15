import { Divider, Link, Paper, Typography } from "@mui/material";
import React from "react";
import { MuiMdxComponentsOptions, MuiMdxComponentsOptionsPropOverrides } from "./types";

const defaults = (propOverrides: MuiMdxComponentsOptionsPropOverrides) => ({
  h1: (props: object) => (
    <Typography {...props} component="h1" variant="h1" {...propOverrides.h1} />
  ),
  h2: (props: object) => (
    <Typography {...props} component="h2" variant="h2" {...propOverrides.h2} />
  ),
  h3: (props: object) => (
    <Typography {...props} component="h3" variant="h3" {...propOverrides.h3} />
  ),
  h4: (props: object) => (
    <Typography {...props} component="h4" variant="h4" {...propOverrides.h4} />
  ),
  h5: (props: object) => (
    <Typography {...props} component="h5" variant="h5" {...propOverrides.h5} />
  ),
  h6: (props: object) => (
    <Typography {...props} component="h6" variant="h6" {...propOverrides.h6} />
  ),
  ul: (props: object) => (
    <Typography {...props} component="ul" {...propOverrides.ul} />
  ),
  ol: (props: object) => (
    <Typography {...props} component="ol" {...propOverrides.ol} />
  ),
  li: (props: object) => (
    <Typography {...props} component="li" {...propOverrides.li} />
  ),
  hr: (props: object) => (
    <Divider {...props} component="hr" {...propOverrides.hr} />
  ),
  p: (props: object) => (
    <Typography {...props} component="p" variant="body1" {...propOverrides.p} />
  ),
  strong: (props: object) => (
    <Typography
      {...props}
      component="strong"
      variant="inherit"
      {...propOverrides.strong}
    />
  ),
  em: (props: object) => (
    <Typography
      {...props}
      component="em"
      variant="inherit"
      {...propOverrides.em}
    />
  ),
  blockquote: (props: object) => <Paper {...props} {...propOverrides.blockquote} />,
  pre: (props: object) => <Paper {...props} {...propOverrides.pre} />,
  a: (props: object) => <Link {...props} {...propOverrides.a} />,
  wrapper: (props: object) => (
    <div {...props} className="markdown-body" {...propOverrides.wrapper} />
  ),
});

const components = (options?: MuiMdxComponentsOptions) => {
  return {
    ...(options?.overrides || {}),
    ...defaults(options?.propOverrides || {}),
  };
};
export default components;
