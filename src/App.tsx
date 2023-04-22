import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";

export function App() {
  // const [disp, setdisp] = useState({ id: 0, name: "未取得" });
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnWindowFocus: false
  //     }
  //   }
  // });

  // const eventHandle = async () => {
  //   const res: AxiosResponse = await axios.get("http://localhost:5173/name");
  //   setdisp(res.data);
  // };

  // const useQueryFn = useQuery("name", eventHandle);

  const [value, setValue] = useState("");

  const handle = async () => {
    const res = await axios.get("https://best-overwatch-api.herokuapp.com/");
    console.log(res);
    setValue(res.data);
  };

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
