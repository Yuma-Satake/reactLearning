import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Hack Viewerとは', '使い方'];

function MainAppBar() {
  return (
    <AppBar
      position="static"
      color='default'
      >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            Hack Viewer
          </Typography>
          <Box sx={{display:'flex'}}>
            {pages.map((page) => (
              <Button key={page} sx={{ mr:1, color: 'black', display: 'block'}}>
                <Typography variant='body2'>
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;
