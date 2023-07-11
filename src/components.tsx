/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Divider,
  Link,
  Paper,
  Typography,
  darken,
  lighten,
  useTheme,
} from "@mui/material";
import React from "react";
import { MDXComponents } from "mdx/types.js";
import { MuiMdxComponentsOptions } from "./types";

const noOpPre = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >
) => {
  return <>{props.children}</>;
};

const inlineCodeContext = React.createContext(true);

const defaults: (options: MuiMdxComponentsOptions) => MDXComponents = ({
  propOverrides,
  Highlighter,
  highlighterStyle,
}) => ({
  h1: (props: any) => (
    <Typography {...props} component="h1" variant="h1" {...propOverrides?.h1} />
  ),
  h2: (props: any) => (
    <Typography {...props} component="h2" variant="h2" {...propOverrides?.h2} />
  ),
  h3: (props: any) => (
    <Typography {...props} component="h3" variant="h3" {...propOverrides?.h3} />
  ),
  h4: (props: any) => (
    <Typography {...props} component="h4" variant="h4" {...propOverrides?.h4} />
  ),
  h5: (props: any) => (
    <Typography {...props} component="h5" variant="h5" {...propOverrides?.h5} />
  ),
  h6: (props: any) => (
    <Typography {...props} component="h6" variant="h6" {...propOverrides?.h6} />
  ),
  p: (props: any) => (
    <Typography
      {...props}
      component="p"
      variant="body1"
      {...propOverrides?.p}
    />
  ),
  strong: (props: any) => (
    <Typography
      {...props}
      component="strong"
      variant="inherit"
      {...propOverrides?.strong}
    />
  ),
  em: (props: any) => (
    <Typography
      {...props}
      component="em"
      variant="inherit"
      {...propOverrides?.em}
    />
  ),
  ul: (props: any) => (
    <Typography
      {...props}
      component="ul"
      variant="inherit"
      {...propOverrides?.ul}
    />
  ),
  ol: (props: any) => (
    <Typography
      {...props}
      component="ol"
      variant="inherit"
      {...propOverrides?.ol}
    />
  ),
  li: (props: any) => (
    <Typography
      {...props}
      component="li"
      variant="inherit"
      {...propOverrides?.li}
    />
  ),
  a: (props: any) => <Link {...props} {...propOverrides?.a} />,
  hr: (props: any) => (
    <Divider
      {...props}
      component="hr"
      sx={{ height: (theme) => theme.spacing(1) }}
      {...propOverrides?.hr}
    />
  ),
  blockquote: (props: any) => (
    <Paper
      {...props}
      component="blockquote"
      square
      elevation={1}
      sx={{
        paddingLeft: (theme) => theme.spacing(1),
        paddingTop: (theme) => theme.spacing(0.5),
        paddingBottom: (theme) => theme.spacing(0.5),
        paddingRight: (theme) => theme.spacing(0.5),
        color: (theme) => theme.palette.text.secondary,
        borderLeft: 3,
      }}
      {...propOverrides?.blockquote}
    />
  ),
  pre: (props: any) => {
    const { children, ...otherProps } = props;
    return (
      <Paper
        {...otherProps}
        component="pre"
        elevation={2}
        sx={{
          padding: (theme) => theme.spacing(1),
          color: (theme) => theme.palette.text.secondary,
          overflow: "auto",
        }}
        {...propOverrides?.pre}
      >
        <inlineCodeContext.Provider value={false}>
          {children}
        </inlineCodeContext.Provider>
      </Paper>
    );
  },
  code: (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const isInline = React.useContext(inlineCodeContext);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useTheme();
    const language = /language-(\w+)/.exec(props.className || "");
    if (isInline) {
      const color =
        theme.palette.mode === "light"
          ? darken(theme.palette.background.default, 0.2)
          : lighten(theme.palette.background.default, 0.2);

      return (
        <code
          {...props}
          style={{
            borderRadius: theme.shape.borderRadius,
            padding: "0.1rem",
            backgroundColor: color,
          }}
          {...propOverrides?.code}
        />
      );
    }

    if (language && Highlighter) {
      const { children, ...otherProps } = props;
      const style = typeof highlighterStyle === "function" ? highlighterStyle(theme) : highlighterStyle;

      return (
        <Highlighter
          children={children}
          style={style}
          language={language[1]}
          PreTag={noOpPre}
          codeTagProps={{...otherProps, ...propOverrides?.code}}
        />
      );
    }

    return <code {...props} {...propOverrides?.code} />;
  },
  wrapper: (props: any) => (
    <div {...props} className="markdown-body" {...propOverrides?.wrapper} />
  ),
});

const components: (options?: MuiMdxComponentsOptions) => MDXComponents = (
  options
) => {
  return {
    ...defaults(options || {}),
    ...(options?.overrides || {}),
  };
};
export default components;
