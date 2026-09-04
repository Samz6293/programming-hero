function App() {
  let name: string = "Sameer"
  let big3: string[] = ["Samz", "Ghost", "Humzzy"];
  return (
    <>

      <div className="text-lg text-center bg-blue-600 p-4">Welcome to the website of {name}</div>

      <h3>Big 3 members: </h3>

      <ol>
          {big3.map((name, index) => <li key={index}>{name}</li>)}
      </ol>

    </>
  )
}

export default App