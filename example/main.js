"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_2 = require("@mdx-js/react");
var src_1 = require("../src");
var Example_md_1 = require("./Example.md");
react_dom_1["default"].render(<react_1["default"].StrictMode>
    <react_2.MDXProvider components={(0, src_1["default"])()}>
      <Example_md_1["default"] />
    </react_2.MDXProvider>
  </react_1["default"].StrictMode>, document.getElementById("root"));
