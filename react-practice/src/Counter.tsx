// useState and it's implementation
import { useState } from "react"

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
        <h2>Counter: {count}</h2>

        <button onClick={() => setCount(count+1)} 
        className="bg-indigo-600 px-4 py-1 rounded-lg hover:bg-indigo-400">increment</button>

    </div>
  )
}

export default Counter
