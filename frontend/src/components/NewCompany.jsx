import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';

export default function NewCompany({
  label = "New Item",
  labelText = "Enter value...",
  buttonLabel = "Add",
  onSubmit, 
}) {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    if (onSubmit) {
      onSubmit(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ textAlign: 'left' }}>
            {label}
          </Typography>
          <TextField
            required
            fullWidth
            variant="standard"
            label={labelText}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleButtonClick}>
            {buttonLabel}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
