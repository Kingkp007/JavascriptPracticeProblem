Road Side Coder Youtube - https://www.youtube.com/watch?v=Vo3zBqXcDjQ

// ----------------------App.jsx beow -----------------------------------------------------
import './App.css'
import SelectableGrid from "./component/SelectableGrid";

export default function App() {
  return (
    <main>
      <h2>Grid Numbers</h2>
      <SelectableGrid rows="5" cols="5" />
    </main>
  )
}

// ----------------------------SelectableGrid.jsx------------------------------------------

import React from "react";

const SelectableGrid = ({rows=10, cols=10}) => {
  const [selectedBox, setSelectedBox] = React.useState([]);
  const [isMouseDown, setIsMouseDown] = React.useState(false);

  const handleMouseDown = (boxNumber) => {
    setIsMouseDown(true);
    setSelectedBox([boxNumber]);
    console.log(boxNumber);
  }

  const handleMouseUp = () => {
    setIsMouseDown(false);
    // setSelectedBox([boxNumber]);
  }

  const handleMouseEnter = (boxNumber) => {
    if(isMouseDown){
      const startBox = selectedBox[0];
      const endBox = boxNumber ; 
      const startRow = Math.floor((startBox-1)/cols);
      const startCol = (startBox-1) % cols;
      const endRow = Math.floor((endBox-1)/cols);
      const endCol = (endBox-1) % cols;

      const minRow = Math.min(startRow, endRow);
      const minCol = Math.min(startCol, endCol);

      const maxRow = Math.max(startRow, endRow);
      const maxCol = Math.max(startCol, endCol);

      const selected = [];
      for(let row = minRow; row <= maxRow; row++){
        for(let col = minCol; col <= maxCol; col++){
          const boxNumber = row * cols + col + 1;
          selected.push(boxNumber);
        }
      }
      console.log(selected);
      setSelectedBox(selected);
    }
  }

  
  return(
    <div 
      className='grid'
      style ={{"--rows":rows, "--cols":cols}}
      onMouseUp={handleMouseUp}
      >
      {[...Array(rows*cols).keys()].map((i) => {
        return (
          <div 
            className={`box ${selectedBox.includes(i+1)?"select": ""}`} 
            key={i}
            onMouseEnter={() => handleMouseEnter(i+1)}
            onMouseDown={() => handleMouseDown(i+1)}
            onMouseUp={handleMouseUp}
            >
            {i+1}
          </div>)
      })
      }
    </div>
  )
}

export default SelectableGrid;

---------------------------------------------App.css--------------------------------------------------------------------

.grid {
 display:grid;
 grid-template-columns: repeat(var(--cols), 35px);
grid-auto-rows: repeat(var(--rows), 35px);
  gap:2px;
  user-select:none;
}

.box {
  width:35px;
  height:35px;
  display:flex;
  align-items:center;
  justify-content:center; 
  border: 1px solid black;
  /* margin-right:2px; */
}

.select {
  background-color: #b5d5ff;
}
