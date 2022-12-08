import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline'

// import HomePage from "./HomeConponents/HomePage.js";
import EventPage from "./Components/EventConponents/EventPage.js";

function App() {
  return (
    <>
      <CssBaseline></CssBaseline>
      {/* <HomePage></HomePage> */}
      <EventPage></EventPage>
    </>
  );
};

export default App;