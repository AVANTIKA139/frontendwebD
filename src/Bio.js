import { useState } from "react";

function Bio() {
  const [bio, setbio] = useState({
    name: "Avantika",
    batch: "2025",
    branch: "ECE",
    college: "MMMUT",
  });
  const [color, setcolor] = useState("red");
  const handleupdatebio = () => {
    if (bio.name === "Avantika") {
      const newBio = {
        name: "Akanksha",
        batch: "2024",
        branch: "CSE",
        college: "PSIT",
      };
      setbio(newBio);
      setcolor("Blue");
    } else if (bio.name === "Akanksha") {
      const newBio = {
        name: "Avantika",
        batch: "2025",
        branch: "ECE",
        college: "MMMUT",
      };
      setbio(newBio);
      setcolor("red");
    }
  };
  const branchupdate = () => {
    if (bio.branch === "ECE") {
      const updatedBio = { ...bio };
      updatedBio.branch = "Mechanical";
      setbio(updatedBio);
    } else if (bio.branch === "Mechanical") {
      const updatedBio = { ...bio };
      updatedBio.branch = "ECE";
      setbio(updatedBio);
    }
  };
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <h1>
          Hello This is {bio.name}, and I am studying in {bio.college}. My
          branch is {bio.branch} and my batch is {bio.batch}
        </h1>
        <button onClick={() => handleupdatebio()} type="button">
          {" "}
          update Bio{" "}
        </button>
        <button onClick={() => branchupdate()} type="button">
          {" "}
          update branch{" "}
        </button>
      </div>
    </>
  );
}
export default Bio;
