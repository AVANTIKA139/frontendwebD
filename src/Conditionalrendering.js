import { useState } from "react";

const Conditionalrendering = () => {
  const [isVerified, setisVerified] = useState(false);
  return (
    <>
      <h1>Avantika</h1>
      {isVerified ? <p>Avantika is verified</p> : null}

      <button onClick={() => setisVerified(isVerified)} type="button">
        {isVerified ? "deverify enthuashu" : "Verify enthuashu"}
      </button>
    </>
  );
};
export default Conditionalrendering;
