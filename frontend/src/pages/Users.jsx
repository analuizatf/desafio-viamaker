import * as React from 'react'
import { Box, Button, Card, Stack, Typography, CardContent, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function createData(name, email) {
    return { name, email };
}
  
const cards = [
    createData('João da Silva', 'joao@email.com'),
    createData('Maria Moreira', 'maria@email.com'),
    createData('José Souza', 'jose@email.com'),
];

function Users() {
  return (
    <Box sx={{width: '100%', mt:'100px', ml:'20px', mr:'20px'}}>
        <Stack direction='row' sx={{mb:'10px'}}>
            <Typography align='left' variant="h4" sx={{ width: '100%' }}>
            Lista de usuários disponíveis
            </Typography>
            <Button variant="contained" endIcon={<AddIcon />} color='secondary' size='large' sx={{border: '1px solid darkred', textTransform: 'capitalize', fontSize: 'h6.fontSize'}}>
                Adicionar
            </Button>
        </Stack>
        <Stack direction='column' spacing={2}>
            {cards.map((card) => (
                <Card sx={{ display: 'flex', border: '1px solid'}}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {card.name}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <IconButton aria-label="add">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="play/pause">
                            <DeleteOutlineIcon />
                        </IconButton>
                    </Box>
                </Card>
            ))}
        </Stack>
    </Box>
  );
}


export default Users;