# About

This module creates an MDX components object for use with MDXjs and Material UI.

See the example running here https://dev.joesturge.com/mui-mdx-components.

![GithubCI](https://github.com/joesturge/mui-mdx-components/actions/workflows/node.js.yml/badge.svg)
![Coverage](https://dev.joesturge.com/mui-mdx-components/badges/coverage.svg)
[![npm version](https://badge.fury.io/js/mui-mdx-components.svg)](https://badge.fury.io/js/mui-mdx-components)
[![Contributions](https://img.shields.io/badge/contributions-welcome-blue)](https://github.com/joesturge/mui-mdx-components/issues)

# Usage

Intended to be used with `react:17+` `@mui/material:5` and `@mdx-js/mdx:2`.

This module exports a single method `components(options)` which is used to create an MDX components object to be passed to an `MDXProvider` see: https://mdxjs.com/docs/using-mdx/#mdx-provider

# Options

You can optionally pass an options object to the components function:

- overrides - MDXComponents defined here will overwrite the default component
- propOverrides - Used to override the props which are being passed to the default component
- Highlighter - If you wish to use `react-syntax-highlighter` you can pass an implementation for it here and it will be used
- highlighterStyle - You can supply the Highlighter with a style here and it will override the highlighter default, this can also be a function which takes the mui `theme` and returns a `react-syntax-highlighter` style.

# Example

```jsx
import { MDXProvider } from "@mdx-js/react";
import components from "mui-mdx-components";
import { PrismLight as Highlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const options = {
  overrides: {
    h1: CustomElement,
    other: (props) => <span>{prop.children}</span>,
  },
  propOverrides: {
    em: {
      color: "secondary",
    },
  },
  Highlighter,
  highlighterStyle: (theme) =>
    theme.palette.mode === "light" ? oneLight : oneDark,
};

export default (props) => (
  <MDXProvider components={components(options)}>{props.children}</MDXProvider>
);
```

# Supported Components

🗹 **h1** \
🗹 **h2** \
🗹 **h3** \
🗹 **h4** \
🗹 **h5** \
🗹 **h6** \
🗹 **p** \
🗹 **strong** \
🗹 **em** \
🗹 **ul** \
🗹 **ol** \
🗹 **li** \
🗹 **a** \
🗹 **hr** \
🗹 **wrapper** \
🗹 **code** \
🗹 **pre** \
🗹 **blockquote** \
☐ **del** \
☐ **input** \
☐ **section** \
☐ **sup** \
☐ **table** \
☐ **tbody** \
☐ **td** \
☐ **th** \
☐ **thead** \
☐ **tr**
