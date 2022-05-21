import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import PeopleIcon from "@mui/icons-material/PeopleAltOutlined";
import FingerprintIcon from "@mui/icons-material/FingerprintOutlined";

function MUI() {
  const [inputValue1, setInputValue1] = useState(null);
  const [inputValue2, setInputValue2] = useState(null);

  const clickHandler = () => {
    alert("you send email to your friend");
  };
  return (
    <div className="w-full">
      <input
        className="border"
        placeholder="input your name"
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        className="border"
        placeholder="input your name"
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <Button
        variant="contained"
        color="info"
        disabled={!inputValue1 || !inputValue2}
        size="medium"
        endIcon={<DeleteForeverIcon />}
      >
        Delete
      </Button>
      {(!inputValue1 || !inputValue2) && (
        <p className="text-red-500">pls input all value</p>
      )}
      <div>
        <Button
          variant="outlined"
          // color="error"
          size="large"
          startIcon={<SendIcon />}
          onClick={clickHandler}
          sx={{ color: "#733f28" }}
        >
          Send
        </Button>

        <label htmlFor="contained-button-file">
          <input type="file" id="contained-button-file" className="hidden" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>

        <IconButton color="error">
          <DeleteForeverIcon />
        </IconButton>

        <IconButton color="success" size="large">
          <PeopleIcon />
        </IconButton>

        <IconButton color="error" size="large" sx={{ border: "1px solid red" }}>
          <FingerprintIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default MUI;
