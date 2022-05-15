import React from "react";
import { useState, useEffect } from "react";

function UseEffect1() {
  const [pvSelected, setPvSelected] = useState("");
  const [districtList, setDistrictList] = useState([]);

  const province = ["vientiane", "savannaket", "chapasak"];
  const district = {
    vientiane: ["sisanttanak", "saysettha"],
    savannaket: ["kaysone", "Outhomphone"],
    chapasak: ["pakse", "paksong"],
  };

  useEffect(() => {
    if (pvSelected === "vientiane") {
      setDistrictList(district.vientiane);
    } else if (pvSelected === "savannaket") {
      setDistrictList(district.savannaket);
    } else {
      setDistrictList(district.chapasak);
    }
  }, [pvSelected]);

  return (
    <div>
      <select onChange={(e) => setPvSelected(e.target.value)}>
        {province.map((pv) => (
          <option value={pv}>{pv}</option>
        ))}
      </select>

      <div>
        {districtList.map((dt) => (
          <p>{dt}</p>
        ))}
      </div>
    </div>
  );
}

export default UseEffect1;
