import * as React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Drawer, Button, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import Title from './components/Title';
import Videos from './pages/Videos';
import Products from './pages/Products';
import Users from './pages/Users';

const drawerWidth = 240;

export default function App() {
    const [pageTitle, setPageTitle] = useState('Página Inicial');
    
    return (
        <React.Fragment>
            <Stack direction='column'>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'secondary.light',
                        border: '1px solid'
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar sx={{ mt: '10px', mb: '10px' }}>
                        <Typography variant="h6" align='center' sx={{ width: '100%' }}>Desafio Viamaker</Typography>
                        </Toolbar>
                    <Stack spacing={2} sx={{ mr: 2, ml: 2 }}>
                        <Button variant="contained" color='secondary' size='large' onClick={() => setPageTitle('Página Inicial')} sx={{border: '1px solid darkred', textTransform: 'capitalize', fontSize: 'h6.fontSize'}}>Início</Button>
                        <Button variant="contained" color='primary' size='large' onClick={() => setPageTitle('Produtos')} sx={{border: '1px solid darkblue', textTransform: 'capitalize', fontSize: 'h6.fontSize'}}>Produtos</Button>
                        <Button variant="contained" color='primary' size='large' onClick={() => setPageTitle('Usuários')} sx={{border: '1px solid darkblue', textTransform: 'capitalize', fontSize: 'h6.fontSize'}}>Usuários</Button>
                    </Stack>
                </Drawer>
                <Stack direction='row' sx={{ 
                            width: `calc(100% - ${drawerWidth}px)`, 
                            ml: `${drawerWidth}px`,
                        }}>
                    <AppBar position="fixed"
                        sx={{
                            backgroundColor: grey[300],
                            border: '1px dashed'
                        }}>
                        <Toolbar sx={{ mt: '10px', mb: '10px' }}>
                            <Title>
                            {pageTitle}
                            </Title>
                        </Toolbar>
                    </AppBar>
                    {
                        pageTitle == 'Página Inicial' ? <Videos /> : (pageTitle == 'Produtos' ? <Products />: <Users />)
                    }
                </Stack>
            </Stack>
        </React.Fragment>
    );
}
  