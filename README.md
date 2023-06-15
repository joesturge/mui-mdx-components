# About

This module creates an MDX components object for use with MDXjs and Material UI.

# Usage

Intended to be used with `react:17+` `@mui/material:5` and `@mdx-js/mdx:2`.

This module exports a single method `components(options)` which is used to create an MDX components object to be passed to an `MDXProvider` see: https://mdxjs.com/docs/using-mdx/#mdx-provider

# Options

You can optionally pass an options object to the components function:

- overrides - MDXComponents defined here will overwrite the default component
- propOverrides - Used to override the props which are being passed to the default component

# Example

```jsx
import { MDXProvider } from "@mdx-js/react";
import components from "mui-mdx-components";

const options = {
    overrides: {
        h1: CustomElement,
        other: (props) => <span>{prop.children}</span>
    },
    propOverrides: {
        em: {
            color: "secondary"
        }
    }
}

export default () => <MDXProvider components={components(options)}>
```

# Disclaimer

This project is a WIP please feel free to contribute on github.