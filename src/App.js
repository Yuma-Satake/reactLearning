import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ListItem, Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { Drags } from "./Components/Drags.tsx";

const App = () => {
  return (
    <Stack justifyContent='center' spacing={2} sx={{ m: 10 }}>
      <Drags />
    </Stack>
  );
};

export default App;
