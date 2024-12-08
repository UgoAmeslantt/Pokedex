import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const  LoadingUI = () =>{
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',  // Centrer horizontalement
                alignItems: 'center',      // Centrer verticalement
                height: '100vh'            // Utiliser 100% de la hauteur de la fenêtre
            }}
        >
            <CircularProgress />
        </Box>
    );
}

export default LoadingUI;