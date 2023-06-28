import React, { useState } from "react";

const useStateArray = () => {
  var bioData = [
    {
      id: 0,
      myName: "Avantika",
      age: 20,
    },
    {
      id: 0,
      myName: "Tiwari",
      age: 18,
    },
    {
      id: 2,
      myName: "Rishu",
      age: 25,
    },
    {
      id: 3,
      myName: "Shubhi",
      age: 17,
    },
  ];
  const [myArray, setmyArray] = useState(bioData);
  const clearArray = () => {
    setmyArray([]);
  };
  return (
    <>
      {myArray.map((curElm) => {
        return (
          <h1 className="h1style" key={curElm.id}>
            Name: {curElm.myName} & Age : {curElm.age}{" "}
          </h1>
        );
      })}
      <button className="btn" onClick={clearArray}>
        Clear the Data
      </button>
    </>
  );
};

export default useStateArray;
