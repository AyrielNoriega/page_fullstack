import { useState } from 'react';
import { Link as LinkRouter } from "react-router-dom";
import { Alert, AlertTitle, Button, FormControlLabel, FormLabel, Grid, Link, Radio, RadioGroup, Stack, TextField } from '@mui/material';
import { storeContactsApi } from '../services/api';


export const Form = () => {

    const [formData, setFormData] = useState({
        names: '',
        company: '',
        phone_number: '',
        company_email: '',
        refered: '',
        solution_type: '',
        comments: '',
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.names.length < 3) return;

        if (formData.company.length < 3) return;

        if (formData.phone_number.length < 3) return;
    
        storeContactsApi(formData)
            .then(response => {
                console.log('Respuesta de la API:', response);
                if (response.status == 201) {
                    setShowAlert(true);

                    setTimeout(() => {
                        setShowAlert(false);
                    }, 5000);

                    
                }
            })
            .catch(error => {
                console.error('Error al llamar a la función storeContactsApi:', error);
                // Realizar acciones adicionales si es necesario
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="    "
                        name="names"
                        label="Names"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="company"
                        name="company"
                        label="Company name"
                        fullWidth
                        autoComplete="organization"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone_number"
                        name="phone_number"
                        label="Phone number"
                        fullWidth
                        autoComplete="tel"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="company_email"
                        name="company_email"
                        label="Company email"
                        fullWidth
                        autoComplete="email"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">
                        Solution Type
                    </FormLabel>
                    <RadioGroup
                        row
                        id="solution_type"
                        name="solution_type"
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            control={<Radio color="primary" />}
                            value="factory"
                            label="Factory"
                            style={{
                                color:'#1A2B55'
                            }} 
                        />
                        <FormControlLabel
                            control={<Radio color="primary" />}
                            value="fuel_card"
                            label="Fuel card"
                            style={{
                                color:'#1A2B55'
                            }} 
                        />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="refered"
                        name="refered"
                        label="Refered"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="comments"
                        name="comments"
                        label="Additional comments"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                
                <Grid container direction="row" justifyContent="end">
                    {showAlert && (
                        <Stack sx={{ width: '70%' }} spacing={2}>
                            <Alert severity="success">This is a success alert — check it out!</Alert>
                        </Stack>
                    )}
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, ml: showAlert ? 1 : 'auto', backgroundColor: 'follow.primary' }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
