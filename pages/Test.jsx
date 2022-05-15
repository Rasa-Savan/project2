import React from "react";

function Test({ firstname, lastname, age, children, setFirstname }) {
  return (
    <div>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{age}</p>
      {children}
    </div>
  );
}

export default Test;
