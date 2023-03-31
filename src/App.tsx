import { CheckBox } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export function App() {
  const [disp, setdisp] = useState({ id: 0, name: "未取得" });

  const eventHandle = async () => {
    const res: AxiosResponse = await axios.get("http://localhost:5173/name");
    setdisp(res.data);
  };

  return (
    <Stack direction='column' spacing={5} sx={{ m: 10 }}>
      <Button variant='contained' onClick={eventHandle}>
        取得ボタン
      </Button>
      <Typography>{`IDは：${disp.id}`}</Typography>
      <Typography>{`名前は：${disp.name}`}</Typography>
    </Stack>
  );
}
