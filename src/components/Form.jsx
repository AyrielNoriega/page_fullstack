import { Button, FormControlLabel, FormLabel, Grid, Link, Radio, TextField } from '@mui/material';
import { Link as LinkRouter } from "react-router-dom";
export const Form = () => {
    return (
        <form>
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
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormLabel component="legend">
                        Solution Type
                    </FormLabel>
                    <FormControlLabel
                        control={<Radio color="primary" name="factory" value="yes" />}
                        label="Factory"
                        style={{
                            color:'#1A2B55'
                        }} 
                    />
                    <FormControlLabel
                        control={<Radio color="primary" name="fuel_card" value="yes" />}
                        label="Fuel card"
                        style={{
                            color:'#1A2B55'
                        }} 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id="refered"
                    name="refered"
                    label="Refered"
                    fullWidth
                    variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="comments"
                        name="comments"
                        label="Additional comments"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                
                <Grid container direction="row" justifyContent="end">
                    <Button
                        variant="contained"
                        // onClick={handleNext}
                        sx={{ mt: 3, ml: 1, backgroundColor: 'follow.primary' }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
