const User = ({user}: any) => {
  return (
    <div className="text-center w-full m-3.5  bg-blue-500 rounded-xl p-4  h-46">
        <h2>Name: {user.name}</h2>
        <p>Adress:</p>
        <p>Street: {user.address.street}</p>
        <p>Suite: {user.address.suite}</p>
        <p>City: {user.address.city}</p>
        <p>ZIP: {user.address.zipcode}</p>
    </div>
  )
}

export default User