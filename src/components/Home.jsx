import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, createTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import './Home.css'

// check https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes for colors

const rowsColor = deepOrange[50];
const headerColor= deepOrange[300];

const customTheme = createTheme({
  palette: {
    warning: {
      main: '#ed6c02',
      mode:'light',
      contrastText: 'white',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    /*backgroundColor: theme.palette.warning.main,*/
    backgroundColor:headerColor,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  textAlign:'center'
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
   /*backgroundColor: theme.palette.action.hover,*/
   backgroundColor: rowsColor,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const Home = () => {


    const [users,setUser]=useState([]);

  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        setUser(...users,res.data);
      console.log(users);
    })
  },[]);


  return (
    <Container maxWidth="lg" sx={{ marginTop:'3vh'}}>
            <TableContainer component={Paper} sx={{ maxHeight: 545 }}>
            <Table stickyHeader sx={{ minWidth: 700 }} aria-label="customized table">
            <caption><h3>Employee List</h3></caption>
                <TableHead >
                <TableRow >
                    <StyledTableCell >ID</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Email</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {users.map((row,i) => (
                    <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                        {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.email}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
    </Container>
  )
}

export default Home
