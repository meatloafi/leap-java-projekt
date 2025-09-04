// src/components/CardTallForm.jsx
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function CardTallForm({
  label = "Feedback",
  content,
  onChange, 
}) {
  const [inputValue, setInputValue] = useState(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onChange) {
      onChange(inputValue);
    }
    setInputValue("");
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            sx={{
              textAlign: 'left',
              color: 'text.secondary',
              fontSize: 16,
              fontFamily: 'Helvetica',
              paddingBottom: 2,
            }}
          >
            {label}
          </Typography>

          <form onChange={handleSubmit}>
            <TextField
              required
              fullWidth
              multiline
              minRows={4}
              variant="standard"
              value={content}
              onChange={(e) => onChange?.(e.target.value)}
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
