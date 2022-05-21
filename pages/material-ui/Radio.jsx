import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioPage() {
  const [valueGender, setValueGender] = React.useState("female");
  const [departmentValue, setDepartmentValue] = React.useState("");

  const handleChange = (event) => {
    setValueGender(event.target.value);
  };

  const handleChangeDepartment = (event) => {
    setDepartmentValue(event.target.value);
  };

  console.log("Radio", valueGender);
  console.log("department", departmentValue);
  return (
    <div className="flex space-x-10">
      <FormControl>
        <FormLabel id="lable-control-gender">Department</FormLabel>
        <RadioGroup
          aria-labelledby="lable-control-gender"
          name="gender-group"
          value={valueGender}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="kid" control={<Radio />} label="Kid" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="lable-control-gender">Department</FormLabel>
        <RadioGroup
          aria-labelledby="lable-control-department"
          name="department-group"
          value={departmentValue}
          onChange={handleChangeDepartment}
        >
          <FormControlLabel
            value="it"
            control={<Radio />}
            label="Information Technology"
          />
          <FormControlLabel
            value="electricity"
            control={<Radio />}
            label="Electricity department"
          />
          <FormControlLabel
            value="construction"
            control={<Radio />}
            label="contruction department"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioPage;
