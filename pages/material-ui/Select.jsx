import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectPage() {
  const [selectedValue, setSelectedValue] = useState([]);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  console.log("selected", selectedValue);
  return (
    <div>
      <FormControl sx={{ width: "200px" }} size="small">
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          value={selectedValue}
          onChange={handleChange}
          multiple
        >
          <MenuItem value="" disabled>
            <em>None</em>
          </MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectPage;
