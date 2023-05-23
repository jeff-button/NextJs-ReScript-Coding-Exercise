@react.component
let make = (~children) => {
  <div className="flex flex-col gap-y-4">
    <h1 className="text-blue-400 text-center text-4xl font-bold"> {"Main Page"->React.string} </h1>
    <Next.Link className="text-xl" href="/about"> {"About"->React.string} </Next.Link>
    <BlueButton className="text-xl w-fit">
      {"Click a client side button"->React.string}
    </BlueButton>
    {children}
  </div>
}
