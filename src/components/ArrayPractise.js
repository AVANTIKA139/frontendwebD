import React, { useState } from "react";

const ArrayPractise = () => {
  const [toggle, settoggle] = useState(true);
  const [cities, setcities] = useState([
    "Varanasi",
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Jaipur",
  ]);
  const handleShuffleCities = () => {
    if (toggle) {
      setcities(["Mumbai", "Jaipur", "Kolkata", "Varanasi", "Delhi"]);
    } else {
      setcities(["Varanasi", "Delhi", "Mumbai", "Kolkata", "Jaipur"]);
    }
    settoggle(!toggle);
  };
  // const handleEmptyCities = () => {
  //   setcities([]);
  // };

  // const handleFillCities = () => {
  //   setcities(["Varanasi", "Delhi", "Mumbai", "Kolkata", "Jaipur"]);
  // };

  const handleAddCities = () => {
    let oldcities = [...cities];
    oldcities.push("Hyderabad");
    oldcities.push("Banglore");
    setcities(oldcities);
  };
  const handleRemovecities = () => {
    let oldcities = [...cities];
    oldcities.pop();
    oldcities.pop();
    setcities(oldcities);
  };

  return (
    <>
      <p>this is the list of Cities</p>
      <ol>
        {/* <li>{cities[0]}</li>
        <li>{cities[1]}</li>
        <li>{cities[2]}</li>
        <li>{cities[3]}</li>
        <li>{cities[4]}</li> */}
        {cities.map((v) => {
          return (
            <>
              <li>{v}</li>
            </>
          );
        })}
      </ol>
      <button onClick={() => handleShuffleCities()} type="button">
        Shuffle Cities{" "}
      </button>
      {/* <button onClick={() => handleEmptyCities()} type="button">
        Empty Cities{" "}
      </button>
      <button onClick={() => handleFillCities()} type="button">
        Fill Cities{" "} */}

      <button onClick={() => handleAddCities()} type="button">
        Add Cities{" "}
      </button>
      <button onClick={() => handleRemovecities()} type="button">
        Remove Cities{" "}
      </button>
    </>
  );
};

export default ArrayPractise;
