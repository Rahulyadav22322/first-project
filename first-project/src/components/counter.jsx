import { useState } from "react";

export default function Demo() {
  const [count, setCount] = useState(100);

  return (
    <div className="max-w-6xl h-64 mx-auto shadow-2xl mt-50 ml-100 mr-100 bg-pink-100 rounded-2xl flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Count: {count}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-600"
          onClick={() => setCount(count - 10)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-2xl hover:bg-green-600"
          onClick={() => setCount(count + 10)}
        >
          Increment
        </button>
      </div>
    </div>
  )
}
