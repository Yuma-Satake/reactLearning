import { Typography } from "@mui/material";
import { Box } from "@mui/system";


const HomeTitle = () => {
    return(
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        m:5,
        mt:10,
        }}>
        <Typography variant="h2"component="h1" gutterBottom>
          ハッカソンは
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          競争だ。<br/>
          闘いだ。<br/>
          そして、<br/>
        </Typography>
        <Typography variant="h2" component="h1" color='primary.main' gutterBottom>
        全員が仲間だ。
        </Typography>
        <Typography variant="subtitle1" component="h2" gutterBottom>
          ハッカソン参加者のための、全チーム進捗共有サービス
        </Typography>
      </Box>
    )
}

export default HomeTitle;