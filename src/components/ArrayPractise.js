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
  const Deletecity1 = () => {
    let oldcities = [...cities];
    let newcities = oldcities.filter((v) => v !== "Mumbai");
    setcities(newcities);
  };
  const Deletecity2 = () => {
    let oldcities = [...cities];
    let newcities = oldcities.filter((v) => v !== "Delhi");
    setcities(newcities);
  };
  const DeleteCurrentcities = (selectedcity) => {
    let oldcities = [...cities];
    let newcities = oldcities.filter((v) => v !== selectedcity);
    setcities(newcities);
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
              <button onClick={() => DeleteCurrentcities(v)} type="button">
                Deletethiscity{" "}
              </button>
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
      <button onClick={() => Deletecity1()} type="button">
        Delete Mumbai{" "}
      </button>
      <button onClick={() => Deletecity2()} type="button">
        Delete Delhi{" "}
      </button>
    </>
  );
};

export default ArrayPractise;
