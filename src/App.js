import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Stack } from '@mui/material';
import MailSend from './Components/mail';

const App = () => {
  return (
    <Stack justifyContent='center' sx={{m:50}}>
      <MailSend/>
    </Stack>
  );
};

export default App;

