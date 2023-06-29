import React, { useState } from "react";

const Array = () => {
  const [toggle, settoggle] = useState(true);
  const [fruits, setFruits] = useState(["Apple", "Banana", "Guava", "Orange"]);
  const handleUpdateFruits = () => {
    if (toggle) setFruits(["Banana", "Grapes", "Orange", "Apple"]);
    else setFruits(["Apple", "Banana", "Grapes", "Guava"]);
    settoggle(!toggle);
  };
  return (
    <>
      <p>this is list of fruits</p>
      <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
        <li>{fruits[3]}</li>
        <li>fruits{[4]}</li>
        <li>fruits{[5]}</li>
      </ul>
      CTA = Call to action
      {/* {/* <button onClick={() => handleUpdateFruits()} type="button"></button> */}
      <button type="button" onClick={() => handleShuffleFruits()}></button>
      <button type="button" onClick={() => handleEmptyFruits()}>
        Empty Fruits
      </button>
      <button type="button" onClick={() => handleFillFruits()}>
        Fill Fruits
      </button>
      <button type="button" onClick={() => handleAddFruits()}>
        Add Fruits
      </button>
      <button type="button" onClick={() => handleRemoveFruits()}>
        Remove Fruits
      </button>{" "}
      */}
    </>
  );
};

export default Array;
