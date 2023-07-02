import React, { useState } from "react";

const UseStateObject = () => {
  const [myCandidates, setmyCandidates] = useState([
    {
      myName: "Avantika",
      myAge: 20,
      myDegree: "B.tech",
    },

    {
      myName: "Avanti",
      myAge: 26,
      myDegree: "M.tech",
    },
    {
      myName: "Lovely",
      myAge: 18,
      myDegree: "B.sc",
    },
    {
      myName: "Pratichi",
      myAge: 27,
      myDegree: "B.com",
    },
    {
      myName: "Shubhi",
      myAge: 17,
      myDegree: "intermediate",
    },
  ]);

  const AddCandidates = () => {
    let previousCandidates = [...myCandidates];
    previousCandidates.push(
      { myName: "Pratyush", myAge: 30, myDegree: "M.tech" },
      { myName: "Sonam", myAge: 28, myDegree: "CA" }
    );
    setmyCandidates(previousCandidates);
  };

  const RemoveCandidates = () => {
    let previousCandidates = [...myCandidates];
    previousCandidates.pop();
    setmyCandidates(previousCandidates);
  };

  return (
    <>
      <p
        style={{
          color: "Black",
          backgroundColor: "green",
          fontSize: "120",
          boxShadow: "-moz-initial",
        }}
      >
        List of candidates{" "}
      </p>
      <ol>
        {myCandidates.map((v) => {
          return (
            <>
              <li style={{ backgroundColor: "ButtonFace" }}>
                Name: {v.myName}{" "}
              </li>
              <br></br>
              <li>Batch:{v.myAge}</li>
              <br></br>
              <li>Degree:{v.myDegree}</li>
              <br></br>
            </>
          );
        })}
      </ol>

      <button
        style={{ backgroundColor: "pink", color: "black" }}
        onClick={() => AddCandidates()}
        type="btn"
      >
        AddCandidates
      </button>
      <button
        style={{ backgroundColor: "pink", color: "black" }}
        onClick={() => RemoveCandidates()}
        type="btn"
      >
        RemoveCandidates
      </button>
    </>
  );
};

export default UseStateObject;
