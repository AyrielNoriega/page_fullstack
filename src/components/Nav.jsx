import { useState } from 'react';
import Link from '@mui/material/Link';
import { Toolbar, IconButton, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';

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
    
export const Nav = () => {

    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        console.log(anchorElNav);
        setAnchorElNav(null);
    };

    return (
        <>
            <Toolbar disableGutters sx={{ flexWrap: 'wrap' }}>
                {/* logo pantalla > 900px */}
                <Typography
                    xs={12}
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{ 
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        color: 'black',
                        fontWeight: 700,
                        textDecoration: 'none',
                    }}
                >
                    Factor
                    <span
                        style={{ 
                            color: '#5cacc4',
                        }}
                    >Tek</span>
                </Typography>

                {/* menu en xs */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="primary.main2"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {navItems.map((item) => (
                            <MenuItem
                                key={item.title}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography
                                    color="primary.main"
                                    textAlign="center"
                                >
                                        {item.title}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* logo pantalla en xs */}     
                <Typography
                    xs={12}
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{ 
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        color: 'black',
                        fontWeight: 700,
                        textDecoration: 'none',
                    }}
                >
                    Factor
                    <span
                        style={{ 
                            color: '#5cacc4',
                        }}
                    >Tek</span>
                </Typography>

                {/* menu en md */}
                <Box component='nav' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            variant="button"
                            color="primary.main"
                            href={item.url}
                            sx={{
                                my: 1,
                                mx: 1.5,
                                textDecoration: 'none',
                                ':hover': { color: 'primary.main2'},
                            }}
                        >
                            {item.title}
                        </Link>
                    ))}
                </Box>
            </Toolbar>
        </>
    )
}
