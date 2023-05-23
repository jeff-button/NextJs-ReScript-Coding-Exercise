

import Link from "next/link";
import * as JsxRuntime from "react/jsx-runtime";

function AboutPage(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h2", {
                      children: "About Page",
                      className: "text-red-300 font-bold"
                    }),
                JsxRuntime.jsx(Link, {
                      href: "/",
                      className: "text-xl",
                      children: "Home"
                    })
              ],
              className: "flex flex-col"
            });
}

var make = AboutPage;

export {
  make ,
}
/* next/link Not a pure module */
