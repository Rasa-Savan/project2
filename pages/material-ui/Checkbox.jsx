import React, { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

function CheckboxPage() {
  const [state, setState] = useState({
    web: false,
    database: false,
    network: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  console.log("result", state);
  return (
    <div>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">ໃຫ້ເລືອກວິຊາຮຽນ</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.web}
                onChange={handleChange}
                name="web"
              />
            }
            label="web"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.database}
                onChange={handleChange}
                name="database"
              />
            }
            label="database"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.network}
                onChange={handleChange}
                name="network"
              />
            }
            label="network"
          />
        </FormGroup>
        <FormHelperText>Be choose as you want</FormHelperText>
      </FormControl>
    </div>
  );
}

export default CheckboxPage;
