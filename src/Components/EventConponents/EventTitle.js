import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import eventData from "./eventData.json";

const MainTitle = () => {
    return(
        <Box sx={{m:3, p:4, border: '0.5px solid grey'}}>
            <Box>
                <Typography variant="h6">{eventData.name}</Typography>
            </Box>
            <Box sx={{mt:1}}>
                <Typography xs={{mt:2}} variant="sumtitle1">{eventData.about}</Typography>
            </Box>
        </Box>
    )
}

export default MainTitle;