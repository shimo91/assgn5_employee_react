import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='navbar'>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Employee
            </Typography>
            <Button>
                <Link style={{color:'white',textDecoration:'none'}} to={'/'}>Home</Link>
                </Button>
            <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}}  to={'form'}>Employee Form</Link></Button>
            </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

export default Navbar
