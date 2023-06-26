import React, { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
      <div className="formpractice mt-4">
        <label style={{ color: "blue" }}>Enter your Full Name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Full Name"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Email"
          type="password"
        />
      </div>

      <p> The name of user is {name} </p>
      <p> The email of user is {email} </p>
      <p> The password of user is {password} </p>
    </>
  );
};

export default Form;
