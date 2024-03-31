// ROADSIDE CODER - https://www.youtube.com/watch?v=u9-x0sG-WQc
CODE SADBOX -


// ----------------------------------App.js----------------------------------
import "./styles.css";
import { useState } from "react";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";

export default function App() {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Nummbers ", state: false },
    { title: "Include Symbols ", state: false },
  ]);

  const { password, errorMessage, generatePassword } = usePasswordGenerator(
    checkBoxData,
    length
  );
  const handleCheckBoxChange = (i) => {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state;
    setCheckBoxData(updatedCheckBoxData);
  };

  const handleChange = (e) => {
    setLength(e.target.value);
  };
  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copyBtn" onClick={() => {}}>
            copy
          </button>
        </div>
      )}
      {/* Char length */}
      <div className="charlength">
        <span>
          <label htmlFor="">Charachter Length</label>
          <label htmlFor="">{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {/* CHECK BOX */}
      <div className="checkboxes">
        {checkBoxData.map((data, index) => (
          <div className="checkbox" key={index}>
            <input
              type="checkbox"
              checked={data.state}
              onChange={() => handleCheckBoxChange(index)}
            />
            <label htmlFor="">{data.title}</label>
          </div>
        ))}
      </div>
      {/* STRENGTH */}

      {/* ERROR HANDLING */}

      {errorMessage && <div className="error">{errorMessage}</div>}

      {/* GENERATE BUTTON */}
      <button
        className="generateBtn"
        onClick={() => {
          generatePassword(checkBoxData, length);
        }}
      >
        Generate Password
      </button>
    </div>
  );
}

// ---------------------HOOKS--------------------------
import { useState } from "react";
export const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatePassword = (checkBoxData, length) => {
    let charset = "";
    let generatedPassword = "";
    const selectedOptions = checkBoxData.filter((checkbox) => checkbox.state);

    if (selectedOptions.length === 0) {
      setErrorMessage("⚠️Please select atleast one checkbox");
      setPassword("");
      return;
    }
    selectedOptions.forEach((option) => {
      if (option.title === "Include Uppercase Letters") {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else if (option.title === "Include Lowercase Letters") {
        charset += "abcdefghijklmnopqrstuvwxyz";
      } else if (option.title === "Include Nummbers ") {
        charset += "0123456789";
      } else if (option.title === "Include Symbols ") {
        charset += "!@#$%^&*()_+";
      }
    });

    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(
        Math.floor(Math.random() * charset.length)
      );
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
};
---------------------CSS---------------------------------------------------
* {
  font-family: Arial;
}

.container {
  background-color: black;
  padding: 24px;
}
.header {
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}

button {
  padding: 10px;
  background-color: #2a8b8b;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
}

.copyBtn {
  height: 30px;
  font-size: 10px;
}

.charlength {
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
}
.charlength span {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
}

.checkboxes {
  color: white;
  font-size: 14px;
  font-weight: 700;
  display: grid;
  grid-template-columns: auto auto;
}

.checkboxes div {
  display: flex;
  gap: 5px;
  padding-bottom: 25px;
}

.generateBtn {
  width: 100%;
  /* height: 30px; */
  font-size: 20px;
  padding: 20px;
}

.error {
  color: red;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding-bottom: 24px;
}

