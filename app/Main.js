

import Link from "next/link";
import * as JsxRuntime from "react/jsx-runtime";
import * as BlueButton$CodingExerciseTemplate from "../src/BlueButton.js";

function Main(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h1", {
                      children: "Main Page",
                      className: "text-blue-400 text-center text-4xl font-bold"
                    }),
                JsxRuntime.jsx(Link, {
                      href: "/about",
                      className: "text-xl",
                      children: "About"
                    }),
                JsxRuntime.jsx(BlueButton$CodingExerciseTemplate.make, {
                      children: "Click a client side button",
                      className: "text-xl w-fit"
                    }),
                props.children
              ],
              className: "flex flex-col gap-y-4"
            });
}

var make = Main;

export {
  make ,
}
/* next/link Not a pure module */
