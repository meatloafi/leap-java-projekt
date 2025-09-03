import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Importera komponenter från Material-UI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Link,
  Avatar
} from '@mui/material';

function ReportsList({ reports }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="reports table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Report Summary</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Consultant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((report) => (
            <TableRow
              key={report.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
              hover 
            >
              <TableCell>{report.id}</TableCell>
              <TableCell>
                <Link component={RouterLink} to={`/reports/${report.id}`} underline="hover">
                  {report.reportSummary}
                </Link>
              </TableCell>
              <TableCell>
                <Chip label={report.project} size="small" />
              </TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>
                <Avatar sx={{ width: 28, height: 28, bgcolor: 'orange' }}>
                  {report.consultant.charAt(0)}
                </Avatar>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ReportsList;