import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline'

// import HomePage from "./Components/HomeConponents/HomePage.js";
// import EventPage from "./Components/EventConponents/EventPage.js";
import TeamSetPage from "./Components/TeamSetConponents/TeamSetPage.js"; 

function App() {
  return (
    <>
      <CssBaseline></CssBaseline>
      {/* <HomePage></HomePage> */}
      {/* <EventPage></EventPage> */}
      <TeamSetPage></TeamSetPage>
    </>
  );
};

export default App;