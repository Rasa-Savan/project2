import React, { useEffect, useState } from "react";

function UseEffectPage() {
  const [Name, setName] = useState("");
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (condition === true) {
      setName("Mr. Phonesavan");
    } else {
      setName("Mr. Vilaysak");
    }
  }, [condition]);

  return (
    <div>
      <p>{Name}</p>
      <button onClick={() => setCondition(!condition)}>click me</button>
    </div>
  );
}

export default UseEffectPage;
