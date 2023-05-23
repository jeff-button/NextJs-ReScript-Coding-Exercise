@@directive("'use client';")

@react.component
let make = (~children, ~className="") => {
  <button
    className={`text-blue-800 rounded bg-slate-100 px-2 py-1 ${className}`}
    onClick={_ => Js.log(`clicked in client`)}>
    children
  </button>
}
