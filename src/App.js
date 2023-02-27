import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack, Typography } from '@mui/material';
import MailSend2 from './Components/MailSend2';
import MailSend from './Components/MailSend';

const App = () => {
  return (
    <Stack justifyContent='center' spacing={2} sx={{m:50}}>
      <Typography>send</Typography>
      <MailSend/>
      <Typography>send2</Typography>
      <MailSend2/>
    </Stack>
  );
};

export default App;

