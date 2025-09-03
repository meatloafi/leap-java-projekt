import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

export default function ScoreCircle({ title, subtitle, score = '--' }) {
  return (
    <Paper variant="outlined" sx={{ p: 2, textAlign: 'center'}}>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 80,
          height: 80,
          borderRadius: '50%',
          border: '2px solid #e0e0e0',
          margin: '16px auto',
        }}
      >
        <Typography variant="h5" component="div">
          {score}
        </Typography>
      </Box>
      <Typography variant="caption" color="text.secondary">
        {subtitle}
      </Typography>
    </Paper>
  );
}