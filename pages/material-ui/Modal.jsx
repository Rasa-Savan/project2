import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

function ModalPage() {
  const [openModal, setOpenModal] = useState(false);

  console.log("modal", openModal);
  return (
    <div>
      <Button
        variant="outlined"
        color="error"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </Button>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={style}>
          <div className="flex flex-col items-center space-y-3">
            <p className="text-3xl font-bold">Confirmation!</p>
            <p className="text-xl">Are you sure to delete this user ?</p>
            <div className="space-x-10 ">
              <Button variant="outlined" color="success">
                OK
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalPage;
