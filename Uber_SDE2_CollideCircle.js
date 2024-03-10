YT LINK - https://www.youtube.com/watch?v=bQpfb_aNohM&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=12
QUESTION - https://learnersbucket.com/examples/interview/detect-overlapping-circles-in-react/



import { useEffect, useState } from "react";
import "./App.css";
const RADIUS = 50;

export default function App() {
  const [circleCords, setCircleCords] = useState([]);
  useEffect(() => {
    document.addEventListener("click", generateCircle);

    return () => {
      document.removeEventListener("click", generateCircle);
    };
  }, []);

  const generateCircle = (e) => {
    const { clientX, clientY } = e;
    console.log(clientX, clientY);

    const newCircleCords = {
      top: clientY - RADIUS,
      bottom: clientY - RADIUS + 2 * RADIUS,
      left: clientX - RADIUS,
      right: clientX - RADIUS + 2 * RADIUS,
      background: "red",
    };

    setCircleCords((prevState) => {
      for (let i = 0; i < prevState.length; i++) {
        const collides = ElementsOverlap(newCircleCords, prevState[i]);
        if (collides) {
          newCircleCords.background = "green";
          break;
        }
      }

      return [...prevState, newCircleCords];
    });
  };

  const ElementsOverlap = (circle1, circle2) => {
    const collides = !(circle1.top > circle2.bottom || circle1.right < circle2.left || circle1.bottom < circle2.top || circle1.left > circle2.right);

    return collides;
  };
  
  return (
    <main>
      <h1>Uber Circle Question</h1>
      <div>
        {/* render each circle */}
        {circleCords.map((e) => (
          <Circle {...e} key={e.top + e.left + e.right} />
        ))}
      </div>
    </main>
  );
}

// circle element
const Circle = ({ top, left, background }) => {
  console.log("Circle Event Clicked");
  return (
    <div
      style={{
        position: "absolute",
        width: 2 * RADIUS,
        height: 2 * RADIUS,
        borderRadius: "50%",
        opacity: "0.5",
        background,
        top,
        left,
      }}
    ></div>
  );
};

//   return (
// <div>
//   {/* render each circle */}
//   {elementsCoordinates.map((e) => (
//     <Circle {...e} key={e.top + e.left + e.right} />
//   ))}
// </div>
//   );
// };

// export default Example;
