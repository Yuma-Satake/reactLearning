import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";

export function App() {
  return (
    <Stack direction='column' spacing={5} sx={{ m: 10 }}>
      <Typography>{value}</Typography>
      <Button
        variant='contained'
        onClick={() => {
          handle();
        }}
      >
        ヒーロー
      </Button>
    </Stack>
  );
}
