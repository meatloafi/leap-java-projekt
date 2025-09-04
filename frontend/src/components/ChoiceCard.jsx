import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function ChoiceCard({
  label = "Select Item",
  options = [],         
  onSubmit,
  buttonIcon = <AddIcon />,
  valueKey = "id",     
  displayKey = "name",  
}) {
  const [selected, setSelected] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(selected);
      setSelected('');
    }
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
              paddingBottom: 2,
            }}
          >
            {label}
          </Typography>

          <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
            <InputLabel>Choose {label} Here...</InputLabel>
            <Select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {options.map((opt) => (
                <MenuItem key={opt[valueKey]} value={opt[valueKey]}>
                  {opt[displayKey]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
}
