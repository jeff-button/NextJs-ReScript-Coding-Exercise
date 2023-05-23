@react.component
let make = (~children) => {
  <div className="flex flex-col">
    <h2 className="text-red-300 font-bold"> {"About Page"->React.string} </h2>
    <Next.Link className="text-xl" href="/"> {"Home"->React.string} </Next.Link>
  </div>
}
