import * as React from 'react'
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function createData(name, price, description) {
    return { name, price, description };
  }
  
const rows = [
    createData('Livro', 50.00, 'Este produto é um livro'),
    createData('Alimento', 10.50, 'Este produto é um alimento'),
    createData('Remédio',200.64, 'Este produto é um remédio'),
];

function Products() {
  return (
    <TableContainer sx={{width: '100%', mt:'100px', ml:'20px', mr:'20px'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{backgroundColor: 'secondary.light'}}>
                <TableRow>
                    <TableCell sx={{border: '1px dashed'}}>
                        <Typography>Nome do produto</Typography>
                    </TableCell>
                    <TableCell sx={{border: '1px dashed'}}>
                        <Typography>Preço do produto</Typography>
                    </TableCell>
                    <TableCell sx={{border: '1px dashed'}}>
                        <Typography>Ações</Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody> 
                {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{`R$ ${row.price.toFixed(2)}`}</TableCell>
                    <TableCell align="right">
                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>    
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}


export default Products;