import React, { useState } from "react";

const RulesHook = () => {
  const [myName, setmyName] = useState("Avantika");

  return (
    <div>
      <h1>{myName}</h1>
    </div>
  );
};

export default RulesHook;
