import React from 'react';
import { Box, Card, CardContent, Typography, TextField } from '@mui/material';

export default function CardTallForm({
  label = "Feedback",
  value,
  onChange,
}) {
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
              pb: 2,
            }}
          >
            {label}
          </Typography>

          <TextField
            required
            fullWidth
            multiline
            minRows={4}
            variant="standard"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder="Enter your feedback..."
          />
        </CardContent>
      </Card>
    </Box>
  );
}
