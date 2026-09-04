import { Suspense } from "react";
import Names from "./names";
import Nav from "./nav";
import Counter from "./Counter";
import Card from "./Card";
import Users from "./Users";

// getting api data
async function userDataPromise() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

function App() {
  return (
    <>
      <Nav />
      <Names />
      <Counter />
      <Card title="Base tier" info="basic use"
        price="$20.00" />

      <Suspense fallback={<p>Loading...</p>}>
        <Users userData={userDataPromise()}></Users>
      </Suspense>
    </>
  )
}

export default App