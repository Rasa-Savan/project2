import React from "react";
import MUI from "./material-ui/Button";
import CheckboxPage from "./material-ui/Checkbox";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RadioPage from "./material-ui/Radio";
import SelectPage from "./material-ui/Select";
import TextfieldPage from "./material-ui/Textfield";
import AvatarPage from "./material-ui/Avatar";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CardPage from "./material-ui/card-mui";
import AccordionPage from "./material-ui/Accordion";
import TabPage from "./material-ui/Tab";
import ModalPage from "./material-ui/Modal";
import MiniDrawer from "./material-ui/drawer";
import JsonPlaceHolder from "./fetch-api/json-placeholder";
import Covid19 from "./fetch-api/covid";

function IndexPage() {
  return (
    <div>
      <Covid19 />
      {/* <JsonPlaceHolder /> */}
      {/* <MiniDrawer /> */}
      {/* <AppBar>
        <Toolbar>
          <div className="flex justify-between items-center w-full">
            <p>RASA Programing</p>
            <div className="flex items-center">
              <Avatar alt="Phonesavan" src="/images/me.jpg" />
              <Button variant="outlined" sx={{ color: "white" }}>
                Logout
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Container maxWidth sx={{ height: "100px" }}>
        <p>banner</p>
      </Container>
      <ModalPage />
      <AccordionPage />
      <TabPage />
      <Container maxWidth="md">
        <div className="flex space-x-2">
          <CardPage />
          <CardPage />
          <CardPage />
          <CardPage />
        </div>
        <br />
        <AvatarPage />
        <TextfieldPage />
        <SelectPage />
        <br />
        <MUI />
        <CheckboxPage />
        <RadioPage />
      </Container> */}
    </div>
  );
}

export default IndexPage;
