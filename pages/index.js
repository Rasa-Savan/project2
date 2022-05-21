import React from "react";
import MUI from "./material-ui/Button";
import CheckboxPage from "./material-ui/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RadioPage from "./material-ui/Radio";
import SelectPage from "./material-ui/Select";

function IndexPage() {
  return (
    <div className="">
      <p>Welcome to Material UI</p>
      <SelectPage />
      <br />
      <MUI />
      <CheckboxPage />
      <RadioPage />
    </div>
  );
}

export default IndexPage;
