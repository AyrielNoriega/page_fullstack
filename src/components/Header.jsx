import { AppBar, Container, Grid, IconButton, Toolbar } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Nav } from './Nav';

export const Header = () => {

    return (
        <AppBar

            sx={{ backgroundColor: 'secondary.main', display: 'flex' }}>
            <Toolbar
                sx={{ 
                    backgroundColor: 'primary.main',
                }}
            >
                <Container maxWidth="lg">
                    <Grid 
                        container
                        direction="row"
                        justifyContent="end"
                        alignItems="center"
                    >
                        <IconButton
                            sx={{
                                color: 'white',
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: 'white',
                            }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                </Container>
            </Toolbar>
            <Container>
                <Nav />
            </Container>
        </AppBar> 
    )
}
