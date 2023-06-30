import React, { useState } from "react";

const UseStateObject = () => {
  const [myObject, setmyObject] = useState({
    Name: "Avantika",
    Batch: 20,
    Package: "B.tech",
  });
  const changeObject = () => {
    setmyObject({ ...myObject, myName: "dwifof" });
  };
  return (
    <div>
      <h1 className="h1style">
        Name : {myObject.myName} & Age :{myObject.myAge} & Degree :
        {myObject.myDegree}
      </h1>
      <button className="btn" onClick={changeObject}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;
