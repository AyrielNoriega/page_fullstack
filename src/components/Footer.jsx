import { Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';

const footers = [
    {
        title: 'Financial solutions',
        description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
        ],
    },
    {
        title: 'Company',
        description: [
            'Team',
            'History',
            'Contact us', 
            'Locations',
        ],
    },
    {
        title: 'Resources',
        description: [
            'Resource',
            'Resource name',
            'Another resource',
            'Final resource',
        ],
    },
    {
        title: 'Contact us',
        description: [
            '175 SW 7HT Miami, EE.UU',
            '(132)131-3143',
        ],
    },
];
export const Footer = () => {
    return (
        <Grid   
            maxWidth="xl"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                pb: 8,
                border: '0px', 
                // py: [3, 6],
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'primary.main',
            }}
        >
            <Grid
                // direction="row"
                justifyContent="space-evenly"
                textAlign="center"
                maxWidth="xl"
                py={1}
                sx={{
                    width: '100%',
                    backgroundColor: 'follow.primary',
                    zIndex: 3
                }}
                >
                <Typography variant="h6">
                    Follow us: 
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
                </Typography>
            </Grid>
            <Grid
                container
                spacing={1}
                justifyContent="space-evenly"
                textAlign="center"
                px={{ sm: 4 }}
                pt={4}
            >
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                <li key={item}>
                                    <Link href="#" variant="subtitle1" color="text.primary" style={{ textDecoration: 'none',  fontWeight: 300}}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
