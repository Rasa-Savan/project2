import { useState } from "react";
function Greeting() {
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    const staffId = e.target.value;

    switch (staffId.toLowerCase()) {
      case "abl00108":
        setName("Phonesavan");
        break;
      case "abl01452":
        setName("Noungning");
        break;
      case "abl01856":
        setName("Santixay");
        break;
      default:
        setName("Not found");
        break;
    }
  };
  return (
    <div>
      <h1>{name}</h1>
      <input
        maxLength={8}
        className="border py-1 px-2"
        placeholder="input staff id"
        onChange={changeHandler}
      />
    </div>
  );
}
export default Greeting;
