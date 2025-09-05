import React from 'react';
import { TextField, Box, Card, CardContent, Typography } from '@mui/material';

export default function CardProConForm({
  label = "Pro/Con",
  value,
  color = "white",
  onChange
}) {
  return (
    <Box sx={{ minWidth: 275, pb: 1 }}>
      <Card variant="outlined" sx={{ backgroundColor: color }}>
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
