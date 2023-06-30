/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Link, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import { MDXComponents } from "mdx/types.js";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs, vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  MuiMdxComponentsOptions,
  MuiMdxComponentsOptionsPropOverrides,
} from "./types";

const defaults: (
  propOverrides: MuiMdxComponentsOptionsPropOverrides
) => MDXComponents = (propOverrides) => ({
  h1: (props: any) => (
    <Typography {...props} component="h1" variant="h1" {...propOverrides.h1} />
  ),
  h2: (props: any) => (
    <Typography {...props} component="h2" variant="h2" {...propOverrides.h2} />
  ),
  h3: (props: any) => (
    <Typography {...props} component="h3" variant="h3" {...propOverrides.h3} />
  ),
  h4: (props: any) => (
    <Typography {...props} component="h4" variant="h4" {...propOverrides.h4} />
  ),
  h5: (props: any) => (
    <Typography {...props} component="h5" variant="h5" {...propOverrides.h5} />
  ),
  h6: (props: any) => (
    <Typography {...props} component="h6" variant="h6" {...propOverrides.h6} />
  ),
  p: (props: any) => (
    <Typography {...props} component="p" variant="body1" {...propOverrides.p} />
  ),
  strong: (props: any) => (
    <Typography
      {...props}
      component="strong"
      variant="inherit"
      {...propOverrides.strong}
    />
  ),
  em: (props: any) => (
    <Typography
      {...props}
      component="em"
      variant="inherit"
      {...propOverrides.em}
    />
  ),
  ul: (props: any) => (
    <Typography
      {...props}
      component="ul"
      variant="inherit"
      {...propOverrides.ul}
    />
  ),
  ol: (props: any) => (
    <Typography
      {...props}
      component="ol"
      variant="inherit"
      {...propOverrides.ol}
    />
  ),
  li: (props: any) => (
    <Typography
      {...props}
      component="li"
      variant="inherit"
      {...propOverrides.li}
    />
  ),
  a: (props: any) => <Link {...props} {...propOverrides.a} />,
  hr: (props: any) => (
    <Divider
      {...props}
      component="hr"
      sx={{ height: "1em" }}
      {...propOverrides.hr}
    />
  ),
  blockquote: (props: any) => (
    <Paper
      {...props}
      component="blockquote"
      sx={{ paddingLeft: "1em", borderLeft: "3px solid", borderRadius: 0 }}
      {...propOverrides.wrapper}
    />
  ),
  pre: (props: any) => {
    console.log(props);
    return (
      <Paper
        {...props}
        component="pre"
        sx={{ padding: "1em" }}
        {...propOverrides.wrapper}
      />
    );
  },
  code: (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const match = /language-(\w+)/.exec(props.className || "");
    return match ? (
      <SyntaxHighlighter {...props} style={theme.palette.mode === "light" ? vs : vs2015} language={match[1]} PreTag={React.Fragment} {...propOverrides} />
    ) : (
      <code {...props} />
    );
  },
  wrapper: (props: any) => (
    <div {...props} className="markdown-body" {...propOverrides.wrapper} />
  ),
});

const components = (options?: MuiMdxComponentsOptions) => {
  return {
    ...defaults(options?.propOverrides || {}),
    ...(options?.overrides || {}),
  };
};
export default components;
