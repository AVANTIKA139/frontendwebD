// example of using normal useState
// / import { useState } from "react";

// const Name = () => {
//   // var val = "Avantika Tiwari";
//   const [myName, setmyName] = useState("Avantika Tiwari");
//   const changeName = () => {
//     // val = "Lovely Tiwari";
//     // console.log(val);
//     setmyName("Lovely Tiwari");
//   };
//   console.log(myName);
//   return (
//     <div>
//       <h1>{myName}</h1>
//       <button className="btn" onClick={changeName}>
//         Click me please
//       </button>
//     </div>
//   );
// };

// export default Name;

// example of how to toggle the data()
import { useState } from "react";

const Name = () => {
  // var val = "Avantika Tiwari";
  const [myName, setmyName] = useState("Avantika Tiwari");
  const changeName = () => {
    // val = "Lovely Tiwari";
    // console.log(val);
    // Ternary opertor for if-else.
    let val = myName;
    val === "Avantika Tiwari"
      ? setmyName("Lovely Tiwari")
      : setmyName("Avantika Tiwari");
    // if (val === "Avantika Tiwari") {
    //   setmyName("Lovely Tiwari");
    // } else {
    //   setmyName("Avantika Tiwari");
    // }
  };
  console.log(myName);
  return (
    <div>
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName}>
        Click me please
      </button>
    </div>
  );
};

export default Name;
