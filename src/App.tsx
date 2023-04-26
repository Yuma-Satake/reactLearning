import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const value = "Hello World";

const handle = () => {
  console.log("e");
};

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
