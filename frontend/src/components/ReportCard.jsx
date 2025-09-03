import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function ReportCard({ title, children, cardColor = '#fff', fullHeight = false }) {
  return (
    <Card variant="outlined" sx={{ backgroundColor: cardColor, height: fullHeight ? '100%' : 'auto' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, mb: 1.5 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}