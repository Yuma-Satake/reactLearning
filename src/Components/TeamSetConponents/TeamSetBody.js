import { Button, FormControl, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormLabel from '@mui/material/FormLabel';


const TeamSetBody = () => {
    return(
        <>
            <Box sx={{mt:3,ml:1}}>
                <Typography variant="h5">チームの設定</Typography>
                <List>
                    <ListItem divider sx={{py:2}}>
                        <ListItemText>
                            <Typography variant="subtitle1">チーム名</Typography>
                        </ListItemText>
                        <TextField label="チーム名の変更" variant="outlined"></TextField>
                        <Button sx={{mx:1}}>
                            変更
                        </Button>
                    </ListItem>
                    <ListItem divider  sx={{py:2}}>
                        <ListItemText>
                            <Typography variant="subtitle1">進捗</Typography>
                        </ListItemText>
                        <FormControl sx={{mr:15}}>
                            <FormLabel>プロダクトの進捗</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="idea" control={<Radio />} label="アイデア出し"></FormControlLabel>
                                <FormControlLabel value="specification" control={<Radio />} label="仕様検討"></FormControlLabel>
                                <FormControlLabel value="function" control={<Radio />} label="機能開発"></FormControlLabel>
                                <FormControlLabel value="integration" control={<Radio />} label="統合"></FormControlLabel>
                                <FormControlLabel value="presentation" control={<Radio />} label="プレゼン作成"></FormControlLabel>
                            </RadioGroup>
                        </FormControl>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default TeamSetBody;