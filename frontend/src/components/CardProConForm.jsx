import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardProConForm({
  label = "Pro/Con",
  content = "Enter Pros/Cons here...",
  color = "white",
  onSubmit
}) {

  const [inputValue, setInputValue] = useState(content);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit(inputValue);
      }
      setInputValue("");
    };

  return (
    <Box sx={{ minWidth: 275, color:color }} paddingBottom="8px">
      <Card variant="outlined" textAlign="left"sx={{ backgroundColor: color }}>
        <CardContent >
          <Typography gutterBottom variant="body1" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 16, fontFamily: 'Helvetica', paddingBottom: 2 }}>
            {label}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              multiline
              minRows={4}
              variant="standard"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              sx={{ mb: 2 }}
              placeholder="Enter your feedback..."
            />

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            </Box>
          </form>

        </CardContent>
      </Card>
    </Box>
  );
}