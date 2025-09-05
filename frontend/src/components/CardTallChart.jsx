import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CardTAllChart({
  label = "Score Breakdown History",
  reports = [],
}) {

  const chartData = reports.map(report => ({
    date: new Date(report.createdDate).toLocaleDateString(),
    Joy: report.joyScore,
    Simplicity: report.simplicityScore,
    Results: report.resultScore,
    Responsibility: report.responsibilityScore 
  }));

  return (
    <Box sx={{ minWidth: 275, height: '100%'}}>
      <Card variant="outlined" sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%' }}>
          <Typography gutterBottom variant="body1" sx={{ textAlign: 'left', color: 'text.secondary', fontSize: 16, fontFamily: 'Helvetica', paddingBottom: 2 }}>
            {label}
          </Typography>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="85%">
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 10]}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Joy" stroke="#e50042" />
                <Line type="monotone" dataKey="Simplicity" stroke="#00a69a" />
                <Line type="monotone" dataKey="Results" stroke="#ff630f" />
                <Line type="monotone" dataKey="Responsibility" stroke="#ff65bf"/>
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <Typography>No report data available for the selected consultant.</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

