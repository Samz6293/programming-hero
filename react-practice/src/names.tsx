
const Names = () => {

    let big3: string[] = ["Samz", "Ghost", "Humzzy"];

    return (
        <div className="text-center p-2">
            <h3>Big 3 members: </h3>

            <ol>
                {big3.map((name, index) => <li key={index}>{name}</li>)}
            </ol>

        </div>
  )

}
export default Names
