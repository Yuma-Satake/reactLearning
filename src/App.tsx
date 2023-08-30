import { Box, Button, Modal, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const value = "Hello World";

const handle = () => {
  console.log("e");
};

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Stack
      direction='column'
      spacing={5}
      sx={{ m: 10 }}
    >
      <Typography>{value}</Typography>
      <Button
        variant='contained'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        ModalOpen
      </Button>
      <Modal
        open={isModalOpen}
        onClose={() => {
          console.log("log");
          setIsModalOpen(false);
        }}
        hideBackdrop
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "0.5px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
          }}
        >
          モーダルの中身
        </Box>
      </Modal>
    </Stack>
  );
}
