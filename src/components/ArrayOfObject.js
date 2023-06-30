import React, { useState } from "react";

const ArrayOfObject = () => {
  const [students, setstudents] = useState([
    { name: "Avantika", batch: "ece", package: "29lpa" },
    { name: "Avantik", batch: "ce", package: "29lpa" },
    { name: "Avanika", batch: "cse", package: "29lpa" },
    { name: "Avanika", batch: "ee", package: "29lpa" },
  ]);
  return (
    <>
      <h1>this is array of object</h1>

      <ul>
        {students.map((v) => {
          return (
            <>
              <li>Name: {v.name} </li>
              <li>Batch:{v.batch}</li>
              <li>Package{v.batch}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default ArrayOfObject;
