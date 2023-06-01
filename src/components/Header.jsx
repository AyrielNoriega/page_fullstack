import { AppBar, Button, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const navItems = [
    {
        title: 'HOME',
        url: '/',
    },
    {
        title: 'FINALTIAL SOLUTIONS',
        url: '/',
    },
    {
        title: 'ABOUT US',
        url: '/',
    },
    {
        title: 'FAQs',
        url: '/',
    },
    {
        title: 'REFERRALS',
        url: '/',
    },
    {
        title: 'GET STARTED',
        url: '/',
    },
    {
        title: 'CONTACT US',
        url: '/',
    },
];

export const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: 'secondary.main', display: 'flex' }}>
            <Toolbar
                sx={{ 
                    backgroundColor: 'primary.main',
                }}
            >
                <Container  maxWidth="lg">
                    <Grid 
                        sx={{

                        }}
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
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography
                        xs={12}
                        sx={{ 
                            flexGrow: 1,
                            color: 'black',
                            fontWeight: 700,
                        }}
                        variant="h4"
                        noWrap
                        // component="div"
                    >
                        Factor
                        <span
                            style={{ 
                                color: '#5cacc4',
                            }}
                        >Tek</span>
                    </Typography>
                    <nav>
                        {navItems.map((item) => (
                            <Link
                                variant="button"
                                color="primary.main"
                                href={item.url}
                                sx={{ my: 1, mx: 1.5, textDecoration: 'none', ':hover': { color: 'primary.main2'}, }}
                            >
                                {item.title}
                            </Link>

                        ))}
                        
                        {/* <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none', ':hover': { color: 'primary.main2'}, }}
                        >
                            FINAL SOLUTIONS
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none', ':hover': { color: 'primary.main2'}, }}
                        >
                            ABOUT US
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none', ':hover': { color: 'primary.main2'}, }}
                        >
                            FAQs
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none', ':hover': { color: 'primary.main2'}, }}
                        >
                            REFERRALS
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none', ':hover': { color: 'primary.main2'}, }}
                        >
                            GET STARTED
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none', ':hover': { color: 'primary.main2'}, }}
                        >
                            CONTACT US
                        </Link> */}
                    </nav>
                        {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            Login
                        </Button> */}
                </Toolbar>
            </Container>
        </AppBar> 
    )
}
