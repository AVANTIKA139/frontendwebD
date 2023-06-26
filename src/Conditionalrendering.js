import { useState } from "react";

const ConditionalRendering = () => {
  const [isVerified, setisVerified] = useState(false);
  return (
    <>
      <h1>Avantika</h1>
      {isVerified ? <p>Avantika is verified</p> : null}

      <button onClick={() => setisVerified(true)} type="button">
        verify Avantika
      </button>
    </>
  );
};
export default ConditionalRendering;
