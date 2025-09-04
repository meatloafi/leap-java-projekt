import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Slider } from '@mui/material';

export default function SliderCard({
  label = "Score",
  description = "",
  min = 1,
  max = 10,
  step = 0.1,
  initialValue = 5,
  onChange
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <Box sx={{ minWidth: 275, minHeight: 120 }}>
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
              paddingBottom: 1,
            }}
          >
            {label}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              sx={{ textAlign: 'left', color: 'text.secondary', paddingBottom: 2 }}
            >
              {description}
            </Typography>
          )}

          <Box sx={{ px: 1 }}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              step={step}
              min={min}
              max={max}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
