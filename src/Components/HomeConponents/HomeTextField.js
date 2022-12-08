import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";


const HomeTextField = () => {
    return(
        <Box
            sx={{
                ml:5
            }}
            noValidate
            autoComplete="off"
            >
            <Typography variant="body2" gutterBottom>
                イベントへ参加
            </Typography>
            <TextField sx={{mt:1}} id="eventid" label="イベントID"></TextField>
            <Box>
                <Button variant="contained" sx={{mt:2}}>送信</Button>
            </Box>
        </Box>
    )
} 

export default HomeTextField;