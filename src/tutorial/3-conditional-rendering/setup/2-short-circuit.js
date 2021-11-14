import React, { useState } from "react";
// short-circuit evaluation for diffrent value
// ternary operator for diffrent value and tags

const ShortCircuit = () => {
  const [text, setText] = useState("Majk");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      {/* <h1>{text ? text : "john doe"}</h1> */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <h2>{isError ? "there is error" : "there is no error"}</h2>
    </>
  );
};

export default ShortCircuit;
