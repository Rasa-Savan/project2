import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import UsernameIcon from "@mui/icons-material/AccountCircleOutlined";
import PasswordIcon from "@mui/icons-material/LockOpenOutlined";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

function TextfieldPage() {
  const [fullname, setFullname] = useState({ firstname: "", lastname: "" });

  console.log("fullname", fullname);
  return (
    <div>
      <TextField
        label="Firstname"
        variant="outlined"
        size="small"
        value={fullname.firstname}
        onChange={(e) =>
          setFullname({ ...fullname, firstname: e.target.value })
        }
      />
      <TextField
        label="Lastname"
        variant="filled"
        size="small"
        value={fullname.lastname}
        onChange={(e) => setFullname({ ...fullname, lastname: e.target.value })}
      />
      <TextField
        label="Fullname"
        value={fullname.firstname + " " + fullname.lastname}
        InputProps={{
          readOnly: true,
        }}
      />
      <br />

      <FormControl variant="outlined">
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <UsernameIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl variant="outlined">
        <Input
          id="input-with-icon-adornment"
          type="password"
          endAdornment={
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <br />
      <TextField
        label="Comment"
        variant="outlined"
        size="small"
        multiline
        rows={5}
        // value={fullname.firstname}
        // onChange={(e) =>
        //   setFullname({ ...fullname, firstname: e.target.value })
        // }
      />
    </div>
  );
}

export default TextfieldPage;
