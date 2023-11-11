import { Box, Button, Container, Grid, Stack, TextField, Typography, alpha, createTheme, getContrastRatio } from '@mui/material'
import React from 'react'
import './Form.css'



const Form = () => {
  return (
      
      <Grid container item xs={12} direction="row"  justifyContent="center"  alignItems="center" sx={{ marginTop:'3vh'}} >
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, 
      }}
      noValidate
      autoComplete="off" spacing={4} direction="row" alignItems="center"
    >
      <Grid container  className='formContainer' >
      <Grid item xs={12} >
        <Typography variant="h4" component="h3" sx={{textAlign:'center', color:'orangered'}}>
          Employee Form
        </Typography>
      </Grid>
      <Grid container item xs={12} direction="row"  justifyContent="center"  alignItems="center" >
      
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
        />
        <TextField
          id="outlined-textarea"
          label="Designation"
        />
        </Grid>
      <Grid container item xs={12} direction="row"  justifyContent="center"  alignItems="center">
      <TextField
          id="outlined-multiline-flexible"
          label="Location"
        />
        <TextField
          id="outlined-textarea"
          label="Salary"
        />
        
        </Grid>
        <Grid container item xs={12} direction="row"  justifyContent="center"  alignItems="center">
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Grid>
        </Grid>
        
    </Box>
    </Grid>
  )
}

export default Form
