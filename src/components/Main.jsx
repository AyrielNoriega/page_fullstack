import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Paper, Stepper, Typography } from "@mui/material";
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';
import { Form } from "./Form";

const benefits = [
    {
        title: 'Manage your cashflow',
        description: [
            'Irure anim ullamco enim eu exercitation ex quis labore exercitation occaecat et esse velit magna.',
        ],
        image: 'https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg',
        icon: 'cash', 
    },
    {
        title: 'Forget Collections',
        subheader: 'Most popular',
        description: [
            'Irure anim ullamco enim eu exercitation ex quis labore exercitation occaecat et esse velit magna.',
        ],
        image: 'https://media.istockphoto.com/id/1302423098/es/foto/empleados-en-la-oficina-moderna.jpg?s=612x612&w=0&k=20&c=bK6-8VCNi65AZ1Yex3hj8E-tUXnJmcYxZtoSMOAvsEE=',
        icon: 'forget', 
    },
    {
        title: 'Debt free',
        description: [
            'Irure anim ullamco enim eu exercitation ex quis labore exercitation occaecat et esse velit magna.',
        ],
        image: 'https://media.istockphoto.com/id/1448474701/es/foto/la-dise%C3%B1adora-gr%C3%A1fica-sonr%C3%ADe-mientras-trabaja-en-una-computadora-port%C3%A1til-en-una-oficina.jpg?s=612x612&w=0&k=20&c=YEyAjeh1C2LjIl3EPHqdd4gBiNVlNU8qnh9jjFvzR8k=',
        icon: 'debt',
    },
];

const section1 = [
    {
        title: 'Manage your cashflow',
        description: [
            'Invoice factoring.',
            'International factoring.',
            'Supli chain finance',
        ],
        icon: 'uno', 
    },
    {
        title: 'Funding for owner-operator and fleet',
        description: [
            'Invoice factoring.',
            'International factoring.',
            'Supli chain finance',
        ],
        icon: 'dos', 
    },

];


export const Main = () => {
    return (
        <>
            <Grid
                container
                component="section"
                px={5}
                sx={{
                    backgroundImage: "url('https://www.trucksters.io/wp-content/uploads/2022/08/foto-articulo-3.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: 'calc(100vh - 30px)',
                }}
            >
                <Box style={{
                        content: '',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: 'calc(100vh - 30px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                />
                <Grid
                    item
                    md={6}
                    sx={{ zIndex: 1 }}
                    
                    display='flex'
                    alignItems='center'
                    paddingX={6}
                >
                    <Box>
                        <Typography 
                            textAlign='left'
                            color="text.primary"
                            component="h4"
                            variant="h3"
                            sx={{ alignItems: 'center' }}
                            >
                            Build By Truckers,<br /> For Truckers.
                        </Typography>
                        <Typography 
                            textAlign='left'
                            color="text.primary"
                            component="p"
                            sx={{ pt: 1 }}
                        >
                            Enim magna Lorem tempor deserunt fugiat sunt esse ex qui esse aute magna. 
                            Ut id ex amet elit proident ullamco laboris reprehenderit laboris officia esse occaecat. 
                            Laborum exercitation sit ad pariatur irure officia laboris labore laborum commodo ex. 
                            Occaecat anim occaecat velit ex exercitation ea. Tempor consequat nulla culpa ipsum occaecat 
                            quis qui proident anim officia aliqua officia velit. Nostrud ad ullamco consequat irure sunt 
                            incididunt aliqua mollit esse. Elit commodo ullamco et aliqua aliquip.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    md={6}
                    sx={{zIndex: 1,}}
                    justifyContent='center'
                >
                    <Paper
                        variant="outlined"
                        sx={{
                            my: { xs: 3, md: 6 },
                            p: { xs: 2, md: 3 },
                            backgroundColor: 'rgba(255, 255, 255, 0.5)'
                        }}
                        >

                        <Form />
                    </Paper>      
                </Grid>
            </Grid>


            <Container
                maxWidth="md"
                component="main"
            >
                <Grid component="section">  
                    <Grid sx={{ pt: 8, pb: 6 }}>
                        <Typography
                            component="h3"
                            variant="h5"
                            align="center"
                            color="primary.main"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                            }}
                        >
                            The benefits of factoring with FactorTek
                        </Typography>
                        <Divider />
                        <Typography  align="center" color="primary.main" component="p" sx={{ pt: 1 }}>
                            Get an advance on your autstanding invoices. The cash flow you need, when yout need it.
                        </Typography>
                    </Grid>                      
                    <Grid container spacing={5} alignItems="flex-end">
                        {section1  .map((item) => (
                            <Grid
                                item
                                key={item.title}
                                xs={12}
                                sm={6}
                                md={6}
                            >
                                <Card container="true" sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={6}
                                        sx={{
                                            // display: 'flex',
                                            justifyContent: 'center',
                                            // alignItems: 'baseline',
                                            // height: '100%',
                                            mt: 2,
                                            display: { xs: 'none', sm: 'none', md: 'block' }
                                        }}
                                    >
                                        { item.icon == 'uno' && <SavingsIcon sx={{ color: 'primary.main', fontSize: 100 }} />}
                                        { item.icon == 'dos' && <CheckBoxIcon sx={{ color: 'primary.main', fontSize: 100 }} />}
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={6} 
                                        justifyContent='center'
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }} 
                                    >
                                        <CardContent>
                                            <Typography
                                                component="h3"
                                                variant="subtitle"
                                                align="center"
                                                key={item.title}
                                                sx={{  color: 'primary.main', pb: 2,  justifyContent: 'left' }}
                                            >
                                                {item.title}
                                            </Typography>

                                            <ul >
                                                {item.description.map((line) => (
                                                    <Typography
                                                        component="li"
                                                        variant="subtitle1"
                                                        align="left"
                                                        key={line}
                                                        sx={{  color: 'primary.main' }}
                                                    >
                                                        {line}
                                                    </Typography>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Grid>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid component="section">                        
                    <Grid sx={{ pt: 8, pb: 6, mt: 5 }}>
                        <Typography
                            component="h3"
                            variant="h5"
                            align="center"
                            color="primary.main"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                            }}
                            >
                            The benefits of factoring with FactorTek
                        </Typography>
                        <Divider />
                        <Typography  align="center" color="primary.main" component="p" sx={{ pt: 1 }}>
                            Get an advance on your autstanding invoices. The cash flow you need, when yout need it.
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        spacing={5}
                        alignItems="flex-end"
                        sx={{ pb: 6 }}
                    >
                        {benefits.map((item) => (
                            <Grid
                                item
                                key={item.title}
                                xs={12}
                                sm={6}
                                md={4}
                                >
                                <Card>
                                    <CardMedia
                                            component="img"
                                            alt={item.title}
                                            height="140"
                                            image={item.image}
                                    />
                                    <CardContent>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'baseline',
                                                mb: 2,
                                            }}
                                        >
                                            { item.icon == 'cash' && <SavingsIcon sx={{ color: 'primary.main' }} />}
                                            { item.icon == 'forget' && <CheckBoxIcon sx={{ color: 'primary.main' }} />}
                                            { item.icon == 'debt' && <CurrencyExchangeIcon   sx={{ color: 'primary.main' }} />}
                                        </Box>
                                        <Typography
                                            component="h3"
                                            variant="subtitle"
                                            align="center"
                                            key={item.title}
                                            sx={{  color: 'primary.main', pb: 2 }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <ul>
                                            {item.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                                sx={{  color: 'primary.main', listStyle: 'none' }}
                                            >
                                                {line}
                                            </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>   
            </Container>
        </>
    )
}
