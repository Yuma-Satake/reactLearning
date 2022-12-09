import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Step, StepLabel, Stepper } from '@mui/material';

import teamData from "./teamData.json";

const steps = [
    "アイデア出し",
    "仕様検討",
    "機能開発",
    "統合",
    "プレゼン作成"
  ];

function EventCard() {
  return (
    <Box sx={{mt:3}}>
    {teamData.map(({teamname,progres}) => (
        <Card sx={{ minWidth: 275, mx:6, mt:3}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                チーム名
                </Typography>
                <Typography variant="h5" component="div">
                {teamname}
                </Typography>
            </CardContent>
            <Box sx={{ width: '100%', my:4, px:2}}>
                <Stepper activeStep={progres} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
            <CardActions>
                <Button sx={{mx:'auto',mb:1}} variant='contained'>進捗を進める</Button>
            </CardActions>
        </Card>
    ))}
    </Box>
  );
}

export default EventCard;
