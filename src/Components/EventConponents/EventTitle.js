import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const eventData = {
        "id" : 1,
        "name" : "【オンライン開発合宿vol.8】「はじめてのハッカソン」",
        "about" : "2日間(11月30日実施のキックオフ以降の事前開発OK)で成果物を創ってエンジニアとしてレベルアップするオンラインハッカソンを開催します。"
    }

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