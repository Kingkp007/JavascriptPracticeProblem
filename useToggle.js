// Link - https://learnersbucket.com/examples/interview/usetoggle-hook-in-react/    
// YT - https://www.youtube.com/watch?v=xZxZFX-QEFE&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=10


import { useState, useCallback } from "react"

export const useToggle = (arr, index=0) => {
  const [value, setValue] = useState(index);
    const toggle = useCallback(
      () => setValue((prevIndex) => (prevIndex >= arr.length - 1 ? 0 : prevIndex + 1)),
      [arr]
    );
  
return [toggle,arr[value]];

}

// -----------------------------------------------------------------------------------------------

import './App.css'
import { useToggle } from './useToggle'

export default function App() {
  const [toggle, value] = useToggle([1,2,3,4,5,6],2);
  return (
    <main>
      <h2>{value}</h2>
      <button onClick={toggle}>Toggle</button>
    </main>
  )
}
