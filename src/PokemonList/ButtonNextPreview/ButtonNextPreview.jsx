// src/ButtonNextPreview/ButtonNextPreview.jsx
import * as React from 'react';
import Button from '@mui/material/Button';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Stack from '@mui/material/Stack';

const ButtonNextPreview = ({ onNext, onPreview }) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<SkipPreviousIcon />} onClick={onPreview}>
                Preview
            </Button>
            <Button variant="contained" endIcon={<SkipNextIcon />} onClick={onNext}>
                Next
            </Button>
        </Stack>
    );
};

export default ButtonNextPreview;
