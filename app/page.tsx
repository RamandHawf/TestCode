"use client";
import { useState, useEffect } from "react";

const SortApp = () => {
  const [numInputs, setNumInputs] = useState(0);
  const [inputs, setInputs] = useState<string[]>([]);
  const [sortedInputs, setSortedInputs] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  // Bubble sort algorithm
  const sortInputs = (inputs: string[], order: string) => {
    let sorted = [...inputs];
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length - i - 1; j++) {
        if (
          (order === "asc" && sorted[j] > sorted[j + 1]) ||
          (order === "desc" && sorted[j] < sorted[j + 1])
        ) {
          [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        }
      }
    }
    return sorted;
  };

  const clearDynamicAndSortedData = () => {
    setNumInputs(0)
    setSortedInputs([])
  }
  // Update sortedInputs whenever inputs or sortOrder changes
  useEffect(() => {

    setSortedInputs(sortInputs(inputs, sortOrder) as never[]);
    // setInputs(null)

  }, [inputs, sortOrder]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-80">
        <input
          className="w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none"
          type="number"
          onChange={(e) => setNumInputs(Number(e.target.value))}
          placeholder="Number of inputs"
        />
        {[...Array(numInputs)].map((_, i) => (
          <input
            key={i}
            className="w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none"
            type="text"
            onChange={(e) => setInputs([...inputs, e.target.value])}
            placeholder={`Input ${i + 1}`}
          />
        ))}
        <select
          className="w-full px-3 py-2 mb-4 text-gray-700 border rounded-lg focus:outline-none"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <div className="text-gray-700">
          Sorted inputs: {sortedInputs.join(", ")}
        </div>
        <button className="bg-color bg-red-50 mt-1 p-2" onClick={clearDynamicAndSortedData} >Clear Sorted Data</button>
      </div>
    </div>
  );
};

export default SortApp;
