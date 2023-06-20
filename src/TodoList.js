import React, { useState } from "react";

<link
  href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=DynaPuff&display=swap"
  rel="stylesheet"
/>;

const TodoList = () => {
  const [num, setNum] = useState(23);
  let Level = "";
  console.log(Level);
  if (num < 10) {
    Level = "Low";
  } else if (num > 20) {
    Level = "High";
  } else {
    Level = "Medium";
  }
  return (
    <>
      <div className="outer-box">
        <div className="container">
          <div className="inner-box">
            <h1 className="level">
              {" "}
              Level = <span className="blink">{Level}</span>
            </h1>
            <h2 className="num">
              Counter <br />
              <br />
              <span className="blink">{num}</span>
            </h2>
            <div className="btn-container">
              <button className="btn" onClick={() => setNum(num + 1)}>
                Increment
              </button>
              <button className="btn" onClick={() => setNum(num - 1)}>
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
