// src/components/ChoiceCard.jsx
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Box
} from '@mui/material';

export default function ChoiceCard({
  label = "Select",
  value = "",
  options = [],           
  valueKey = "id",        
  displayKey = "name",    
  onChange
}) {

  console.log(`${label} options:`, options);

  return (
    <Box sx={{ minWidth: 275, minHeight: 100 }}>
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
              paddingBottom: 2
            }}
          >
            {label}
          </Typography>

          <FormControl fullWidth variant="standard">
            <InputLabel>{label}</InputLabel>
            <Select
              value={value}
              onChange={(e) => onChange(e.target.value)}
            >
              {options.length === 0 ? (
                <MenuItem disabled>No {label} available</MenuItem>
              ) : (
                options.map((opt) => (
                  <MenuItem key={opt[valueKey]} value={opt[valueKey]}>
                    {opt[displayKey]}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}
