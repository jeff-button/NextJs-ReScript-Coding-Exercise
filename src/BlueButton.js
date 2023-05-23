'use client';

import * as JsxRuntime from "react/jsx-runtime";

function BlueButton(props) {
  var className = props.className;
  var className$1 = className !== undefined ? className : "";
  return JsxRuntime.jsx("button", {
              children: props.children,
              className: "text-blue-800 rounded bg-slate-100 px-2 py-1 " + className$1 + "",
              onClick: (function (param) {
                  console.log("clicked in client");
                })
            });
}

var make = BlueButton;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
