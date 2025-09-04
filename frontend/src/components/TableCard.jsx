// TableCard.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

export default function TableCard({ title, data, buttonIcon: ButtonIcon, onButtonClick, onRowClick, selectedCompany }) {
  const [selectedRowId, setSelectedRowId] = useState(selectedCompany ? selectedCompany.id : null);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" gutterBottom>{title}</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: '100%' }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  {ButtonIcon && <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    onClick={() => {
                      setSelectedRowId(row.id);
                      if (onRowClick) onRowClick(row);
                    }}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      cursor: 'pointer',
                      backgroundColor: selectedRowId === row.id ? 'rgba(197, 254, 251, 0.7)' : 'inherit'
                    }}
                  >
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    {ButtonIcon && (
                      <TableCell>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation(); 
                            onButtonClick(row);
                          }}
                        >
                          <ButtonIcon />
                        </IconButton>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
