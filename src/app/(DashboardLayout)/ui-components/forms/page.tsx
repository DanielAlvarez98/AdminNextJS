'use client';
import {
    Paper,
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    Select,
    MenuItem,
    InputLabel,
    Box ,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
} from '@mui/material'
import BaseCard from '@/app/(DashboardLayout)/components/shared/BaseCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Forms = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Registro de  Venta">
            <>
            <Stack spacing={3}>
              <TextField
                id="name-basic"
                label="Cliente"
                variant="outlined"
              />
              <TextField type='number' label="Precio Unitario"/>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Producto</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Producto"
                  >
                    <MenuItem value={10}>Television</MenuItem>
                    <MenuItem value={20}>Lavadora</MenuItem>
                    <MenuItem value={30}>Refrigeradora</MenuItem>
                  </Select>
                </FormControl>
              </Box>              
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Plazo de Pagos</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="3" />
                  <FormControlLabel value="male" control={<Radio />} label="6" />
                  <FormControlLabel value="other" control={<Radio />} label="12" />
                </RadioGroup>
                </FormControl>
              <TextField type='date' label="Fecha de expiración"  focused  />

             
            </Stack>
            <br />
            <Button variant="contained">Registrar</Button>

            </>
          </BaseCard>
        </Grid>
  
        
      </Grid>
    );
  };
  
  export default Forms;